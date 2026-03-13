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

$email = trim($data["email"] ?? "");

if($email == ""){
echo json_encode(["status"=>"error"]);
exit;
}

$sql = "INSERT INTO newsletter_subscribers (email)
VALUES (?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s",$email);
$stmt->execute();

echo json_encode([
"status"=>"success"
]);

$stmt->close();
$conn->close();

?>