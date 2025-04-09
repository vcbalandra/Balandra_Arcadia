import multer from 'multer';
import DataParser from 'datauri/parser.js';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

const storageMemory = multer.memoryStorage();

export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },  
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed.'));
    }
});

export const uploadMemory = multer({
    storage: storageMemory,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed.'));
    }
});

const parser = new DataParser();
export const formatImage = (file) => {
    const fileExtension = path.extname(file.originalname).toString();
    return parser.format(fileExtension, file.buffer).content;
};