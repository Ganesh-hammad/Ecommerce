import fs from "fs";
import multer from "multer";

const uploadDir = "uploads/";

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // Ensure this directory exists
        callback(null, "uploads/");
    },
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
})
const upload = multer({storage});

export default upload;