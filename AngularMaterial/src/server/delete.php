<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idPlanta"])) {
    exit("No hay id de planta para eliminar");
}
$idPlanta = $_GET["idPlanta"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM planta WHERE ID_planta = ?");
$resultado = $sentencia->execute([$idPlanta]);
echo json_encode($resultado);