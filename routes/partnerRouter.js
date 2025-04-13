import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import Partner from '../models/Partner.js'; 
import { authenticateUser } from '../middleware/authMiddleware.js'; 
import { getPartners } from "../controllers/partnerController.js";

const router = express.Router();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
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
  },
});



router.post('/add-partners', authenticateUser, upload.single('partnerImage'), async (req, res) => {
  try {
    const { partnerName, partnerWebsite, partnerDescription } = req.body;
    const partnerImage = req.file ? req.file.path : '';  

    const newPartner = new Partner({
      partnerName,
      partnerWebsite,
      partnerDescription,
      partnerImage,
    });

    await newPartner.save();

    return res.status(201).json({
      success: true,
      message: 'Event created successfully!',
      partner: newPartner,
    });
  } catch (error) {
    console.error("Error creating partner:", error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create partner',
    });
  }
});


router.get('/all-partners', getPartners);


export default router;