<?php 
$requestUri = $_SERVER['REQUEST_URI'];
$rootDir = __DIR__ . '/';  // Serve from the 'dist' folder after Vite build

// Check if the request is for a static asset like .css, .js, images, etc.
if (preg_match('/\.(?:ico|webp|png|jpg|jpeg|gif|css|js)$/', $requestUri)) {
    // Get the full file path
    $filePath = $rootDir . $requestUri;

    // Check if the file exists and is readable
    if (file_exists($filePath) && is_readable($filePath)) {
        // Get the file's MIME type to set the correct Content-Type header
        $mimeType = mime_content_type($filePath);
        header('Content-Type: ' . $mimeType);

        // Output the file contents
        readfile($filePath);
        exit;
    } else {
        // If file doesn't exist, send 404 error
        header("HTTP/1.1 404 Not Found");
        echo "File not found.";
        exit;
    }
}

// Handle POST request to /sem for form submissions
if ($requestUri === '/sem' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once __DIR__ . '/sem.php';
    exit;
} else {
    // For all other requests, serve the main index.html (SPA fallback)
    require_once $rootDir . '/index.html';
}
?>
