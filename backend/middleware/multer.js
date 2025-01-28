import fs from "fs";
import path from "path";
import multer from "multer";

// Use '/tmp/uploads' for writable directory in serverless environments
const uploadDir = path.join("/tmp", "uploads");

// Ensure the directory exists
try {
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
        console.log("Uploads directory created successfully at:", uploadDir);
    }
} catch (err) {
    console.error("Error creating uploads directory:", err);
    process.exit(1); // Exit if the directory cannot be created
}

// Configure multer to store files in the writable directory
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, uploadDir);
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        callback(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export default upload;
