<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form fields safely
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Replace with your receiving email address
    $to = "malindutissera@gmail.com";  

    // Build the email
    $email_subject = "New message from: $name - $subject";
    $email_body    = "You have received a new message from your website contact form.\n\n"
                   . "Name: $name\n"
                   . "Email: $email\n"
                   . "Subject: $subject\n\n"
                   . "Message:\n$message\n";

    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "OK"; // this is what your JS expects
    } else {
        echo "Error: Unable to send email. Please try again.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
