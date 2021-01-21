<?php

error_reporting(E_ALL ^ E_NOTICE);

$servername = "localhost";
$username = "root";
$password = "";
$db = "konvate";

$conn = mysqli_connect($servername, $username, $password, $db);

if(!$conn){
	die("Fallo la conexion: " . mysqli_connect_error() );
}
?>