<?php

/*require_once 'path_to_log4php/autoload.php'; // Adjust the path accordingly
$logConfig['log4php_config'] = 'log4php.xml';

//switch to log4php for better log file controls
//1. Download and Install log4php:
//   You can download the log4php library from its official website or use a package manager like Composer to install it.

//2. Configure log4php:
//   Create a configuration file (e.g., log4php.xml) to define logging settings, appenders, and loggers. This file is similar to the configuration used in log4j and log4net.

use Logger;

function globalExceptionHandler($exception) {

    // Initialize log4php
    $loggerConfigFile = 'path_to_log4php.xml'; // Path to your log4php configuration file
    Logger::configure($loggerConfigFile);

    // Get a logger instance
    $logger = Logger::getLogger('exceptionLogger');

    // Log the exception
    $logger->error('An exception occurred: ' . $exception->getMessage());

    // You can also customize the logging behavior further if needed

    // Optionally, re-throw the exception to allow normal PHP error handling
    // throw $exception;
}

function someMethod() {
    // You can also log exceptions
    try {
        // Code that may throw an exception
    } catch (Exception $e) {
        $logger->error('An exception occurred: ' . $e->getMessage());
    }
}
*/

function showMessage($success, $responseCode, $message) {
    global $display_errors;
    http_response_code($responseCode);
    if ($display_errors == true)
        echo json_encode([($success == 1 ? "Message" : "Error") => $message]);
    else {
        if ($success == 1) {
            $key = "Message"; 
            $value = $message;
        } else {
            $key = "Error"; 
            $value = "An error occurred. Please try again.";
        }
        echo json_encode([$key => $value]);
    }
}

function globalExceptionHandler($exception) {
    $logFilePath = './exceptions.txt';
    $display_errors = true;
    $rethrow = false;

    // Construct the log message
    $logMessage = "[" . date("Y-m-d H:i:s") . "] Exception: " . $exception->getMessage() . " in " . $exception->getFile() . " on line " . $exception->getLine() . PHP_EOL;

    // Log the exception to a file
    //$logFilePath = '../logs/exceptions.log'; // Path to the log file
    error_log($logMessage, 3, $logFilePath);

    // You can also display a user-friendly error message or perform other actions here
    //testing only, show log message on screen
    showMessage(0, 500, "An error occurred. Please try again later. Error: ". $logMessage);
  
    // Optionally, you can re-throw the exception to allow normal PHP error handling
    if ($rethrow == true)
        throw $exception;
}

?>