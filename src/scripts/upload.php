<?php
require 'db_connect.php';
if (isset($_POST['nick']) && isset($_FILES['my_audio']) && isset($_POST['submit'])) {

	// echo "<pre>";
	// print_r($_FILES['my_audio']);
	// echo "</pre>";

	$audio_name = $_FILES['my_audio']['name'];
	$tmp_name = $_FILES['my_audio']['tmp_name'];
	$error = $_FILES['my_audio']['error'];

	if ($error == 0) {
		//checking extension (.mp3 , .wav)

		$audio_ex = pathinfo($audio_name, PATHINFO_EXTENSION);
		$audio_ex_lc = strtolower($audio_ex);
		$allowed_exs = array("mp3", "wav");


		//moving to temp_audio path

		if (in_array($audio_ex_lc, $allowed_exs)) {

			echo ('checked');

			$new_audio_name = uniqid("audio-", true) . "." . $audio_ex_lc;
			$audio_upload_path = 'uploads/' . $new_audio_name;
			move_uploaded_file($tmp_name, $audio_upload_path);


			//giving values for global SESSION

			$_SESSION['user'] = $_POST['nick'];
			$username = $_SESSION['user'];
			$_SESSION['audio_url'] = $new_audio_name;
			$_SESSION['audio_name'] = $audio_name;


			// inserting data to database

			$sql = "INSERT INTO audios(audio_url) VALUES('$new_audio_name')";
			mysqli_query($conn, $sql);

			$sql = "UPDATE audios SET user_nick = '$username' WHERE audio_url = '$new_audio_name' ";
			mysqli_query($conn, $sql);

			$sql = "UPDATE audios SET audio_name = '$audio_name' WHERE audio_url = '$new_audio_name' ";
			mysqli_query($conn, $sql);

			// bot sends message to telegram group    
			require "bot_config.php";


			$sql = "DELETE FROM audios WHERE audio_url = '$new_audio_name' ";
			mysqli_query($conn, $sql);


			header("Location:../../index.php");
		}
		//rejecting if extension not .mp3 or wav 
		else {
			$em = "Неподходящий формат для файла (используйте .mp3 или .wav)";
			header("Location:../../index.php?error=$em");

		}


	}


} else {
	header("../Location:index.php");
}