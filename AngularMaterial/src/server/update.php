<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonPlanta = json_decode(file_get_contents("php://input"));
if (!$jsonPlanta) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE planta SET Nombre = ?, Regar = ?, Luz = ? WHERE ID_planta = ?");
$resultado = $sentencia->execute([$jsonPlanta->Nombre, $jsonPlanta->Regar, $jsonPlanta->Luz, $jsonPlanta->ID_planta]);
echo json_encode($resultado);