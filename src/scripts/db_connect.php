<?php

$server = "localhost";
$login = "root";
$password = "";
$db = "test_audio";

$conn = mysqli_connect($server, $login, $password, $db);

if (!$conn) {
	echo "С подключением пизда";
	exit();
}

session_start();

?>