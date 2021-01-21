<?php
include("connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$username = secure_input($_POST["username"]);
	$password = secure_input($_POST["password"]);
	
	$result = mysqli_query($conn, 'SELECT * FROM `users` WHERE `username` = "'.$username.'" AND `password` = "'.$password.'"');

	if(!$result){
		die("Hubo un error". mysqli_error($result));
	}
	
	$nickname = mysqli_fetch_row($result);

	if ($result->num_rows > 0) {
		$_SESSION["loggedin"] = true;
		$_SESSION["nickname"] = $nickname["nickname"];
		header("Location: ../manual.php");
	}
	else{
		$_SESSION["loggedin"] = false;
		echo "No existe ese usuario";
		header("Location: ../index.php?error=1");
	}
}

function secure_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>