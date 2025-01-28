import fs from "fs";
import path from "path";
import multer from "multer";

// Resolve the absolute path for the uploads directory
const uploadDir = path.resolve("uploads");

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // Use the resolved absolute path
        callback(null, uploadDir);
    },
    filename: function (req, file, callback) {
        // Use a unique filename to avoid overwriting
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        callback(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export default upload;
