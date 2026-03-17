<?php

/* ================= ERROR REPORTING (DEBUGGING) ================= */
error_reporting(E_ALL);
ini_set('display_errors', 0);

/* ================= HEADERS ================= */

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

/* ================= LOAD PHPMailer ================= */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

/* ================= DATABASE CONNECTION ================= */

$conn = new mysqli(
    "localhost",
    "Anshsolar_user",
    "Solar@20Ansh26_DB!",
    "Solar_db"
);

if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "Database connection failed: " . $conn->connect_error
    ]);
    exit;
}

/* Ensure proper encoding */
$conn->set_charset("utf8mb4");

/* ================= GET FORM DATA ================= */

$name    = trim($_POST["name"] ?? "");
$phone   = trim($_POST["phone"] ?? "");
$email   = trim($_POST["email"] ?? "");
$date    = trim($_POST["date"] ?? "");
$time    = trim($_POST["time"] ?? "");
$bill    = trim($_POST["bill"] ?? "");
$pincode = trim($_POST["pincode"] ?? "");
$city    = trim($_POST["city"] ?? "");

/* ================= VALIDATION ================= */

if ($name === "" || $phone === "" || $date === "" || $time === "") {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

/* ================= INSERT INTO DATABASE ================= */

$sql = "INSERT INTO consultation_bookings
(name, phone, email, visit_date, visit_time, bill_range, pincode, city)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "status" => "error",
        "message" => "SQL prepare failed: " . $conn->error
    ]);
    exit;
}

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

if (!$stmt->execute()) {
    echo json_encode([
        "status" => "error",
        "message" => "Database insert failed: " . $stmt->error
    ]);
    exit;
}

/* ================= SEND EMAIL USING SMTP ================= */

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();
    $mail->Host       = 'mail.anshsolarelectricals.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = 'noreply@anshsolarelectricals.com';
    $mail->Password   = '[$Email{NO%58|58}';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->CharSet = 'UTF-8';
    $mail->setFrom('noreply@anshsolarelectricals.com', 'Ansh Solar Electricals');

    $mail->addAddress('anshelectrical5858@gmail.com');

    $mail->isHTML(true);

    $mail->Subject = "New Solar Consultation Booking";

    $mail->Body = "
    <h3>New Consultation Booking</h3>

    <p><b>Name:</b> $name</p>
    <p><b>Phone:</b> $phone</p>
    <p><b>Email:</b> $email</p>
    <p><b>Date:</b> $date</p>
    <p><b>Time:</b> $time</p>
    <p><b>Bill Range:</b> $bill</p>
    <p><b>Pincode:</b> $pincode</p>
    <p><b>City:</b> $city</p>
    ";

    $mail->AltBody = "
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

    $mail->send();

} catch (Exception $e) {

    error_log("Mailer Error: " . $mail->ErrorInfo);

}

/* ================= SUCCESS RESPONSE ================= */

echo json_encode([
    "status" => "success",
    "message" => "Consultation booked successfully"
]);

$stmt->close();
$conn->close();

?>