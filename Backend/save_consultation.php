<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// ===== Database Connection =====
$conn = new mysqli(
    "localhost",
    "Anshsolar_user",
    "Solar@20Ansh26_DB!",
    "Solar_db"
);

if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "DB connection failed"
    ]);
    exit;
}

// ===== Collect POST Data =====
$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$email = trim($_POST["email"] ?? "");
$date = trim($_POST["date"] ?? "");
$time = trim($_POST["time"] ?? "");
$bill = trim($_POST["bill"] ?? "");
$pincode = trim($_POST["pincode"] ?? "");
$city = trim($_POST["city"] ?? "");

// ===== Validate Required Fields =====
if ($name == "" || $phone == "" || $date == "" || $time == "") {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

// ===== Prepare SQL Statement =====
$sql = "INSERT INTO consultation_bookings
(name, phone, email, visit_date, visit_time, bill_range, pincode, city)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "Prepare failed"
    ]);
    exit;
}

// ===== Bind Parameters =====
$stmt->bind_param(
    "ssssssss",
    $name,
    $phone,
    $email,
    $date,
    $time,
    $bill,
    $pincode,
    $city
);

// ===== Execute Statement =====
if (!$stmt->execute()) {
    echo json_encode([
        "status" => "error",
        "message" => "Database insert failed"
    ]);
    exit;
}

// ===== Send Email Notification =====

$to = "anshelectrical5858@gmail.com";   // updated email

$subject = "New Solar Consultation Booking";

$message = "
New Consultation Booking

Name: $name
Phone: $phone
Email: $email
Date: $date
Time: $time
Bill Range: $bill
Pincode: $pincode
City: $city
";

$headers = "From: noreply@anshsolarelectricals.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($to, $subject, $message, $headers);

// ===== Return Success =====
echo json_encode([
    "status" => "success",
    "message" => "Consultation booked successfully"
]);

$stmt->close();
$conn->close();

?>