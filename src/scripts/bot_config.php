<?php

$token = "6131024640:AAGkOEddm0vmwLVwNczMHDSqqZiMhphwgJ8";
$bot_username = "@test_audio_amc_bot";

$chat_id = "-1001958926075";

$new_audio_name = $_SESSION['audio_url'];
$audio_artist = $_SESSION['user'];
$audio_title = $_SESSION['audio_name'];

$audio_file = 'uploads/' . $new_audio_name;


$url = "https://yourdomain.com/your-bot-file.php";
$ch = curl_init("https://api.telegram.org/bot" . $token . "/setWebhook?url=" . $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);
curl_close($ch);

$post_fields = [
  'chat_id' => $chat_id,
  'audio' => new CURLFile(realpath($audio_file)),
  'title' => $audio_title,
  'performer' => $audio_artist
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot" . $token . "/sendAudio");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($ch);
curl_close($ch);

unlink($audio_file);

echo $result;
?>