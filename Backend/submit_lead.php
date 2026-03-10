<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

/* ================= DATABASE ================= */

/* ================= DATABASE ================= */

$conn = new mysqli(
"localhost",
"o0kknxu366cb_Anshsolar_user",
"Solar@20Ansh26_DB!",
"o0kknxu366cb_Solar_db"
);

if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "Database connection failed"
    ]);
    exit;
}

/* ================= GET JSON DATA ================= */

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid JSON request"
    ]);
    exit;
}

/* ================= SANITIZE DATA ================= */

$name      = trim($data['name'] ?? '');
$whatsapp  = trim($data['whatsapp'] ?? '');
$city      = trim($data['city'] ?? '');
$pincode   = trim($data['pincode'] ?? '');
$approval  = trim($data['approval'] ?? 'Not Required');
$bill      = intval($data['bill'] ?? 0);
$category  = trim($data['category'] ?? '');

/* ================= VALIDATION ================= */

if (
    $name === '' ||
    $whatsapp === '' ||
    $city === '' ||
    $pincode === '' ||
    $category === ''
) {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

/* WhatsApp basic validation */
if (!preg_match('/^[0-9]{10}$/', $whatsapp)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid WhatsApp number"
    ]);
    exit;
}

/* Bill validation */
if ($bill < 500) {
    $bill = 500;
}

/* ================= INSERT QUERY ================= */

$sql = "INSERT INTO solar_leads
(name, whatsapp, city, pincode, approval, bill, category, created_at)
VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "SQL prepare failed"
    ]);
    exit;
}

/*
s = string
i = integer
*/
$stmt->bind_param(
    "sssssis",
    $name,
    $whatsapp,
    $city,
    $pincode,
    $approval,
    $bill,
    $category
);

/* ================= EXECUTE ================= */

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success",
        "message" => "Solar consultation request submitted ☀️"
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Database insert failed"
    ]);
}

/* ================= CLEANUP ================= */

$stmt->close();
$conn->close();
?>