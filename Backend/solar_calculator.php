<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

/* ================= DATABASE ================= */

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

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
$area = trim($data["area"] ?? "");
$property_type = trim($data["propertyType"] ?? "Residential");

$month = trim($data["month"] ?? "");

$bill = intval($data["bill"] ?? 0);
$units = intval($data["units"] ?? 0);

$solarType = trim($data["solarType"] ?? "On-grid");

/* EXTRA FIELDS */

$business_name = trim($data["businessName"] ?? "");
$connected_load = floatval($data["connectedLoad"] ?? 0);

$society_name = trim($data["societyName"] ?? "");
$flats = intval($data["flats"] ?? 0);

$pump_hp = floatval($data["pumpHP"] ?? 0);
$running_hours = floatval($data["runningHours"] ?? 0);
$farm_area = trim($data["farmArea"] ?? "");

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

switch($property_type){

    case "Society":
        $system_size = round($yearly_bill / 12000 , 2);
        break;

    case "Commercial":
        $system_size = round($yearly_bill / 10000 , 2);
        break;

    case "Agriculture":

        if($units > 0){
            $system_size = round($units / 120 , 2);
        }else{
            $system_size = round(($pump_hp * $running_hours * 30) / 120 ,2);
        }

        break;

    default:
        $system_size = round($yearly_bill / 15000 , 2);
}

/* LIMIT SYSTEM SIZE (MAX 150 kW) */

if($system_size > 150){
    $system_size = 150;
}

/* PANELS (based on 550W panels) */

$panels = ceil(($system_size * 1000) / 550);

/* COST (₹70,000 per kW) */

$cost = $system_size * 70000;

/* SUBSIDY */

$subsidy = $cost * 0.30;

$net_cost = $cost - $subsidy;

/* SAVINGS */

$monthly_savings = round($bill * 0.8);
$yearly_savings = round($monthly_savings * 12);

$payback = 0;

if($yearly_savings > 0){
    $payback = round($net_cost / $yearly_savings,1);
}

$solar_profit_25yrs = ($yearly_savings * 25) - $net_cost;

/* ================= SAVE LEAD ================= */

$sql = "INSERT INTO solar_calculator_leads
(
name,
phone,
city,
area,
property_type,
bill_month,
bill,
monthly_units,
solar_type,
yearly_bill,
system_size,
panels,
subsidy,
payback_years,
business_name,
connected_load,
society_name,
flats,
pump_hp,
running_hours,
farm_area
)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);

if(!$stmt){
    echo json_encode([
        "status"=>"error",
        "message"=>$conn->error
    ]);
    exit;
}

/* Correct datatype mapping (21 fields) */

$stmt->bind_param(
"ssssssiisidiisdisidds",

$name,
$phone,
$city,
$area,
$property_type,
$month,
$bill,
$units,
$solarType,
$yearly_bill,
$system_size,
$panels,
$subsidy,
$payback,
$business_name,
$connected_load,
$society_name,
$flats,
$pump_hp,
$running_hours,
$farm_area
);

if(!$stmt->execute()){
    echo json_encode([
        "status"=>"error",
        "message"=>$stmt->error
    ]);
    exit;
}

/* ================= RESPONSE ================= */

echo json_encode([

    "status"=>"success",

    "system_size"=>$system_size,
    "panels"=>$panels,
    "cost"=>number_format($cost,0),
    "subsidy"=>number_format($subsidy,0),
    "payback"=>$payback,

    "monthly_savings"=>$monthly_savings,
    "yearly_savings"=>$yearly_savings,
    "solar_profit_25yrs"=>number_format($solar_profit_25yrs,0)

]);

$stmt->close();
$conn->close();

?>