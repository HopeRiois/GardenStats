<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("select ID_planta, Nombre, Regar, Luz from planta");
$plantas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($plantas);