<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "yenoqaraqelyan8@mail.ru"; 

$subject = "Նոր հաղորդագրություն EcoLife կայքից";

$txt = "Անուն: " . $name . "\n";
$txt .= "Email: " . $email . "\n\n";
$txt .= "Հաղորդագրություն:\n" . $message;

$headers = "From: " . $email;

if(mail($to, $subject, $txt, $headers)){
    echo "Հաղորդագրությունը հաջողությամբ ուղարկվեց ✅";
}else{
    echo "Սխալ է տեղի ունեցել ❌";
}

?>