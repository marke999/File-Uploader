// Import the Express Framework, file upload handler middleware, create an express app, & specify port
const express = require('express');
const fileUpload = require('./upload');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Server static files from the 'public' directory
app.use(express.static('public'));

// Route handler for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route for file upload & handle POST requests
app.post('/upload', fileUpload);

// Start the server and log message to console
app.listen(port, () => {
  console.log(`Server listening at Port ${port}`);
});
