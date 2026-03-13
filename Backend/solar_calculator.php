<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

/* Handle CORS preflight */
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

/* ================= GET DATA ================= */

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request"
    ]);
    exit;
}

$bill = intval($data["bill"] ?? 0);

if ($bill <= 0) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid electricity bill"
    ]);
    exit;
}

/* ================= SOLAR CALCULATIONS ================= */

/* System size estimation */
$system_size = round($bill / 1000, 2);

/* Panels required (approx 3 panels per kW) */
$panels = ceil($system_size * 3);

/* Installation cost estimation */
$cost = $system_size * 55000;

/* Government subsidy approx 30% */
$subsidy = $cost * 0.30;

/* Effective cost after subsidy */
$net_cost = $cost - $subsidy;

/* Yearly savings */
$yearly_savings = $bill * 12 * 0.8;

/* Payback period */
$payback = round($net_cost / $yearly_savings, 1);

/* ================= RESPONSE ================= */

echo json_encode([
    "system_size" => number_format($system_size,2),
    "panels" => $panels,
    "cost" => number_format($cost,0),
    "subsidy" => number_format($subsidy,0),
    "payback" => $payback
]);

?>