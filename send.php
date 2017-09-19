<?php
if (isset($_POST['name'])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $message = $_POST["message"];

    // E-mail address
    $EmailTo = "email@to.com";
    $Subject = "BEIJING	PLANETTRADING callback form";

    $Body = "Name: ";
    $Body .= $name;
    $Body .= "\n";

    $Body .= "Email: ";
    $Body .= $email;
    $Body .= "\n";

    $Body .= "Tel: ";
    $Body .= $tel;
    $Body .= "\n";

    $Body .= "Message: ";
    $Body .= $message;
    $Body .= "\n";

    $success = mail($EmailTo, $Subject, $Body, "From:" . $email);

    if ($success) {
        echo "succываess";
    } else {
        echo "error";
    }
}
