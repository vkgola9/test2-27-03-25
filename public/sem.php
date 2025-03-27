<?php
require_once '../emailer/emailer.php';

include_once('../emailer/errorHandler.php');
set_exception_handler('globalExceptionHandler');

error_reporting(E_ALL);
ini_set('display_errors', 1); //not working as expected or not understanding?

//Main
$display_errors = 1; //see above

// Check if the request is a POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $jsonData = file_get_contents('php://input');
    //showMessage(0, 400, $jsonData); //testing to see POST received

    // Decode the JSON data
    $data = json_decode($jsonData, true); // true to get an associative array
    if ($data) {
        //showMessage(0, 400, $data); //testing t o see POST received

        // Access individual parameters
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $phone = $data['phone'] ?? '';
        $message = $data['message'] ?? '';
        $none = $data['none'] ?? '';

        //ignore bot by checking filled hidden text field
        if($none != '')
            return;

        //showMessage(0, 400, $name.",".$email.",".$phone.",".$message); //testing to see POST received

        //for reason below, $_POST is no populated, hence had to do the above way
        //ChatGPT answer: The $_POST array is not populated when sending JSON data. Always check the data against the decoded result from php://input.
        //if (!isset($_POST['phone']) || $_POST['phone'] == '' || !isset($_POST['name']) || $_POST['name'] == '' || !isset($_POST['email']) || $_POST['email'] == '' ||
            //!isset($_POST['message']) || $_POST['message'] == '')
        if (!isset($name) || $name == '' || !isset($email) || $email == '' || !isset($phone) || $phone == '' || !isset($message) || $message == '')
        {
            // Set the response code
            http_response_code(400);
            showMessage(0, 400, "Valid Name, Email, Phone and Message are required. Received POST: ". var_dump($_POST));
            return;
        }

        // Process the data as needed
        $sender = new Emailer();
        $sender->contactFormSubmitted($email, $name, $phone, $message);
        http_response_code(200);
        return;
    }
    http_response_code(400);
    showMessage(0, 400, "Valid Name, Email, Phone and Message are required. Received POST: ". var_dump($_POST));
    return;
}

?>


