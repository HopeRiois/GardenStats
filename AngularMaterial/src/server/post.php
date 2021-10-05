<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPlanta = json_decode(file_get_contents("php://input"));
if (!$jsonPlanta) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into planta(Nombre, Regar, Luz) values (?,?,?)");
$resultado = $sentencia->execute([$jsonPlanta->Nombre, $jsonPlanta->Regar, $jsonPlanta->Luz]);
echo json_encode([
    "resultado" => $resultado,
]);