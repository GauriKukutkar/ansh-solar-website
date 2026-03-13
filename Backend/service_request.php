<?php

header("Content-Type: application/json");

$conn = new mysqli(
"localhost",
"Anshsolar_user",
"Solar@20Ansh26_DB!",
"Solar_db"
);

if ($conn->connect_error) {
echo json_encode(["status"=>"error"]);
exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$phone = $data["phone"] ?? "";
$email = $data["email"] ?? "";
$pincode = $data["pincode"] ?? "";
$city = $data["city"] ?? "";
$type = $data["serviceType"] ?? "";
$message = $data["message"] ?? "";

$sql = "INSERT INTO service_requests
(name,phone,email,pincode,city,service_type,message)
VALUES (?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
"sssssss",
$name,
$phone,
$email,
$pincode,
$city,
$type,
$message
);

$stmt->execute();

echo json_encode(["status"=>"success"]);

$stmt->close();
$conn->close();

?>