<?php

header("Content-Type: application/json");

// ===== Database Connection =====
$conn = new mysqli(
    "localhost",
    "Anshsolar_user",
    "Solar@20Ansh26_DB!",
    "Solar_db"
);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed: " . $conn->connect_error]);
    exit;
}

// ===== Collect POST Data =====
$name = $_POST["name"] ?? "";
$phone = $_POST["phone"] ?? "";
$email = $_POST["email"] ?? "";
$date = $_POST["date"] ?? "";
$time = $_POST["time"] ?? "";
$bill = $_POST["bill"] ?? "";
$pincode = $_POST["pincode"] ?? "";
$city = $_POST["city"] ?? "";

// ===== Validate Required Fields =====
if ($name == "" || $phone == "" || $date == "" || $time == "") {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

// ===== Prepare SQL Statement =====
$sql = "INSERT INTO consultation_bookings
(name, phone, email, visit_date, visit_time, bill_range, pincode, city)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "Prepare failed: " . $conn->error]);
    exit;
}

// ===== Bind Parameters =====
$bind = $stmt->bind_param(
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
if (!$bind) {
    echo json_encode(["status" => "error", "message" => "Bind failed: " . $stmt->error]);
    exit;
}

// ===== Execute Statement =====
$exec = $stmt->execute();
if (!$exec) {
    echo json_encode(["status" => "error", "message" => "Execute failed: " . $stmt->error]);
    exit;
}

// ===== Send Email Notification =====
$to = "anshsolarelectricals@gmail.com";   // change to your email
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

$headers = "From: noreply@anshsolarelectricals.com";
mail($to, $subject, $message, $headers);

// ===== Return Success =====
echo json_encode([
    "status" => "success",
    "message" => "Consultation booked successfully"
]);

// ===== Close Statement and Connection =====
$stmt->close();
$conn->close();

?>