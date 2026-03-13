<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

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

/* ================= INPUT ================= */

$name = trim($_POST["name"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$city = trim($_POST["city"] ?? "");
$area = trim($_POST["area"] ?? "");

$property_type = trim($_POST["propertyType"] ?? "Residential");

$roof_type = trim($_POST["roofType"] ?? "");
$roof_area = intval($_POST["roofArea"] ?? 0);
$roof_direction = trim($_POST["roofDirection"] ?? "");
$shadow_level = trim($_POST["shadowLevel"] ?? "");

$roof_condition = trim($_POST["roofCondition"] ?? "");
$roof_access = trim($_POST["roofAccess"] ?? "");

$roof_photo = "";

/* ================= VALIDATION ================= */

if ($name=="" || $phone=="" || $city=="") {

    echo json_encode([
        "status"=>"error",
        "message"=>"Missing user details"
    ]);
    exit;
}

if ($roof_area <= 0) {

    echo json_encode([
        "status"=>"error",
        "message"=>"Invalid roof area"
    ]);
    exit;
}

/* ================= PHOTO UPLOAD ================= */

if(isset($_FILES["photo"]) && $_FILES["photo"]["error"] == 0){

    $target_dir = "uploads/";

    if(!is_dir($target_dir)){
        mkdir($target_dir,0777,true);
    }

    $filename = time()."_".basename($_FILES["photo"]["name"]);
    $target_file = $target_dir.$filename;

    move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file);

    $roof_photo = $filename;
}

/* ================= SOLAR CALCULATION ================= */

/*
Approx rule:
1 kW ≈ 100 sq.ft
1 kW ≈ 3 panels
*/

$estimated_kw = round($roof_area / 100,2);
$panels = ceil($estimated_kw * 3);

/* ================= SUITABILITY LOGIC ================= */

$suitability = "Moderate for Solar";

if(
    ($roof_direction == "South" || $roof_direction == "South-East" || $roof_direction == "South-West")
    && $shadow_level == "No Shadow"
){
    $suitability = "Excellent for Solar";
}

if($shadow_level == "Heavy Shadow"){
    $suitability = "Not Ideal for Solar";
}

/* ================= SAVE LEAD ================= */

$sql = "INSERT INTO roof_suitability_leads
(
name,
phone,
city,
area,
property_type,
roof_type,
roof_area,
roof_direction,
shadow_level,
roof_condition,
roof_access,
roof_photo,
estimated_kw,
panels,
suitability_result
)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
"ssssssisssssdiss",
$name,
$phone,
$city,
$area,
$property_type,
$roof_type,
$roof_area,
$roof_direction,
$shadow_level,
$roof_condition,
$roof_access,
$roof_photo,
$estimated_kw,
$panels,
$suitability
);

if(!$stmt->execute()){
    echo json_encode([
        "status"=>"error",
        "message"=>"Database insert failed"
    ]);
    exit;
}

/* ================= RESPONSE ================= */

echo json_encode([

"status"=>"success",
"estimated_kw"=>$estimated_kw,
"panels"=>$panels,
"suitability_result"=>$suitability

]);

$stmt->close();
$conn->close();
?>