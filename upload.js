// Import multer library for handling multipart/form-data & configure it to store uploaded files
const multer = require('multer');

// Configure multer to store uploaded files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

// Middleware function to handle file upload
const fileUpload = upload.single('uploadedFile');

// Export a middleware function to handle files
module.exports = fileUpload;
