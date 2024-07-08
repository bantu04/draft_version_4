<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = "bantumaruthiprasad@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New Contact Form Submission from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $email_headers)) {
        // Redirect to a thank you page (you can create a thank_you.html)
        header("Location: thank_you.html");
        exit();
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "There was a problem with your submission. Please try again.";
}
?>