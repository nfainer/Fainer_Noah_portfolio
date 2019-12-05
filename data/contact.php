<?php

    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];

        $mailTo = "noahfainer@hotmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: contact.html?mailsend");
    }





    // $name = '';
    // $email = '';
    // $subject = '';
    // $message = '';
    // $recipient = 'noahfainer@hotmail.com';

    // // some validation
    // if(isset($_POST['name'])){
    //     $name = filter_var($_POST['name'], FILTER__SANITIZE_STRING);
    // }

    // if(isset($_POST['email'])){
    //     $email = str_replace(array("/r", "/n","%0a", "%0d"),'',$_POST['email']);
    //     $email = filter_var($__POST['email'], FILTER_VALIDATE_EMAIL);
    // }

    // if(isset($_POST['subject'])){
    //     $subject = filter_var($__POST['subject'], FILTER_SANITIZE_STRING);
    // }

    // if(isset($_POST['message'])){
    //     $message = $_POST['message'];
    // }

    // $headers = [
    //     'From' =>  'noreply@test.ca',
    //     'Reply-To'=>$name.'<'.$email.'>'
    // ];

    // if(mail($recipient, $subject, $message, $headers)){
    //     echo '<p>Thank you for contacting me, '.$name.'. You will get a reply within 24 hours</p>';
    // }else{
    //     echo '<p>We are sorry but the email did not go through</p>';
    // }



?>