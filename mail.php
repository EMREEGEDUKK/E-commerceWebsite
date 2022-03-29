<?php
$email= $_POST['email'];
$to = "gedukemre@hotmail.com";
$subject = "katil butonu";
$txt ="Email = " . $email;
$headers = "From: popup@girisimci.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
header("Location:index.html");
?>