<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

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
        "status"=>"error",
        "message"=>"Database connection failed"
    ]);

    exit;
}

/* ================= GET DATA ================= */

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {

    echo json_encode([
        "status"=>"error",
        "message"=>"Invalid request"
    ]);

    exit;
}

/* ================= INPUT ================= */

$name = trim($data["name"] ?? "");
$phone = trim($data["phone"] ?? "");
$city = trim($data["city"] ?? "");

$month = trim($data["month"] ?? "");
$bill = intval($data["bill"] ?? 0);
$units = intval($data["units"] ?? 0);

$solarType = trim($data["solarType"] ?? "On-grid");

/* ================= VALIDATION ================= */

if ($name == "" || $phone == "" || $city == "") {

    echo json_encode([
        "status"=>"error",
        "message"=>"Missing user details"
    ]);

    exit;
}

if (!preg_match('/^[0-9]{10}$/',$phone)) {

    echo json_encode([
        "status"=>"error",
        "message"=>"Invalid phone number"
    ]);

    exit;
}

if ($bill <= 0) {

    echo json_encode([
        "status"=>"error",
        "message"=>"Invalid electricity bill"
    ]);

    exit;
}

/* ================= BILL CALCULATION ================= */

$yearly_bill = $bill * 12;

/* ================= SOLAR CALCULATION ================= */

$system_size = round($yearly_bill / 15000 , 2);

$panels = ceil($system_size * 3);

$cost = $system_size * 55000;

$subsidy = $cost * 0.30;

$net_cost = $cost - $subsidy;

$yearly_savings = $bill * 12 * 0.8;

$payback = round($net_cost / $yearly_savings,1);

/* ================= SAVE LEAD ================= */

$sql = "INSERT INTO solar_calculator_leads
(name,phone,city,bill_month,bill,monthly_units,solar_type,yearly_bill,system_size,panels,subsidy,payback_years)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "ssssiidddiid",
    $name,
    $phone,
    $city,
    $month,
    $bill,
    $units,
    $solarType,
    $yearly_bill,
    $system_size,
    $panels,
    $subsidy,
    $payback
);

$stmt->execute();

/* ================= RESPONSE ================= */

echo json_encode([

    "status"=>"success",

    "system_size"=>number_format($system_size,2),
    "panels"=>$panels,
    "cost"=>number_format($cost,0),
    "subsidy"=>number_format($subsidy,0),
    "payback"=>$payback

]);

$stmt->close();
$conn->close();

?>