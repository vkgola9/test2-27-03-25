<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/errorHandler.php';

class Emailer {
    public function contactFormSubmitted($formEmail, $formName, $formPhoneNumber, $formBody)
    {
        $dateTime = new DateTime("now");
        $subject = $formName. " " .$formPhoneNumber;
        $body = 
        'Contact form details as below'.
        '<br/><br/>DateTime: '.$dateTime->format('Y-m-d H:i:s').
        '<br/><br/>Name: '.$formName.
        '<br/><br/>Email: '.$formEmail.
        '<br/><br/>Phone: '.$formPhoneNumber.
        '<br/><br/>Body:<br/>'.$formBody;

        return $this->sendEmail($subject, $body);
    }

    protected function sendEmail($subject, $body)
    {
        // Reference the JSON file outside of the public folder
        $settingsPath = realpath(__DIR__ . '/../settings/settings.json');
        $emailSettingsPath = realpath(__DIR__ . '/../settings/emailSettings.json');
        $settings = json_decode(file_get_contents($settingsPath), true);
        $mailSettings = json_decode(file_get_contents($emailSettingsPath), true);

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = $mailSettings['Host'];
            $mail->SMTPAuth = $mailSettings['SMTPAuth'];
            $mail->Username = $mailSettings['Username'];
            $mail->Password = $mailSettings['Password'];
            $mail->SMTPSecure = $mailSettings['SMTPSecure'];
            $mail->Port = $mailSettings['Port'];

            $contactFrom = $mailSettings['contactFrom'];
            $contactFromName = $mailSettings['contactFromName'];
            //Zoho is not allowing relay i.e. use different "from" than what is setup in Zoho, and has to be the login used
            /* $siteEmail = $settings['Email'];
            if ($siteEmail != '') {
                $contactFrom = $siteEmail;
                $contactFromName = 'Support';
            } */

            $body = $body.'<br/><br/>Company Info =>'.
                '<br/><br/>Niche: '.$settings['Niche'].
                '<br/><br/>Company: '.$settings['Company'].
                '<br/><br/>City: '.$settings['City'].
                '<br/><br/>State: '.$settings['State'].
                '<br/><br/>URL: '.$settings['URL']
            ;

            $contactTo = $mailSettings['contactTo'];
            $ownerEmail = $settings['OwnerEmail'];
            if ($ownerEmail != '') {
                $contactBCC = $contactTo;
                $contactTo = $ownerEmail;
            }
            
            $contactToName = $mailSettings['contactToName'];
            $ownerName = $settings['OwnerName'];
            if ($ownerName != '') {
                $contactToName = $ownerName;
                $contactBCCName = 'Admin-LeadsGenuity';
            }

            // Sender and recipient
            $mail->setFrom($contactFrom, $contactFromName);
            $mail->addAddress($contactTo, $contactToName);
            if ($contactBCC != '') {
                $mail->addBCC($contactBCC, $contactBCCName);
            }
            $subject = $mailSettings['contactSubject']. " " .$subject;

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;

            // Send the email
            $mail->send();
            showMessage(1, 200, 'Email sent successfully');
        } catch (Exception $e) {
            showMessage(0, 500, 'Email could not be sent. Error: ' . $mail->ErrorInfo);
            $mail = null;
            //throw $e;
        }
    }
}

?>