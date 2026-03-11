<?php

/* ================= HEADERS ================= */

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

/* Handle CORS preflight */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

/* ================= DATABASE ================= */

$conn = new mysqli(
"localhost",
"Anshsolar_user",
"Solar@20Ansh26_DB!",
"Solar_db"
);

if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "Database connection failed"
    ]);
    exit;
}

/* ================= GET JSON DATA ================= */

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

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

if ($name === '' || $whatsapp === '' || $city === '' || $pincode === '' || $category === '') {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

/* WhatsApp validation */
if (!preg_match('/^[0-9]{10}$/', $whatsapp)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid WhatsApp number"
    ]);
    exit;
}

/* Bill minimum */
if ($bill < 500) {
    $bill = 500;
}

/* ================= INSERT QUERY ================= */

$sql = "INSERT INTO solar_leads
(name, whatsapp, city, pincode, approval, bill, category)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "SQL prepare failed"
    ]);
    exit;
}

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

    /* ================= EMAIL NOTIFICATION ================= */

    $to = "inquiry@anshsolarelectricals.com";
    $subject = "New Solar Lead - Ansh Solar Electricals";

    $message = "
New Solar Consultation Request

Name: $name
Phone: $whatsapp
City: $city
Pincode: $pincode
Monthly Bill: ₹$bill
Category: $category
Approval: $approval

Submitted from website.
";

    $headers = "From: info@anshsolarelectricals.com\r\n";
    $headers .= "Reply-To: info@anshsolarelectricals.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);

    /* ================= SUCCESS RESPONSE ================= */

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