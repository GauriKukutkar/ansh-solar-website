<?php

header("Content-Type: application/json");

$conn = new mysqli(
"localhost",
"Anshsolar_user",
"Solar@20Ansh26_DB!",
"Solar_db"
);

if($conn->connect_error){
 echo json_encode(["status"=>"error","message"=>"DB connection failed"]);
 exit;
}

$name = $_POST["name"] ?? "";
$phone = $_POST["phone"] ?? "";
$email = $_POST["email"] ?? "";
$date = $_POST["date"] ?? "";
$time = $_POST["time"] ?? "";
$bill = $_POST["bill"] ?? "";
$pincode = $_POST["pincode"] ?? "";
$city = $_POST["city"] ?? "";

if($name=="" || $phone=="" || $date=="" || $time==""){
 echo json_encode(["status"=>"error"]);
 exit;
}

$sql="INSERT INTO consultation_bookings
(name,phone,email,visit_date,visit_time,bill_range,pincode,city)
VALUES (?,?,?,?,?,?,?,?)";

$stmt=$conn->prepare($sql);

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

$stmt->execute();

/* ===== SEND EMAIL ===== */

$to="anshsolarelectricals@gmail.com";   // change to your email
$subject="New Solar Consultation Booking";

$message="
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

$headers="From: noreply@anshsolarelectricals.com";

mail($to,$subject,$message,$headers);

echo json_encode([
"status"=>"success"
]);

$stmt->close();
$conn->close();
?>