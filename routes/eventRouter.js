import express from 'express';
import multer from 'multer';
import path from 'path';
import Event from '../models/Event.js';  // Assuming Event is a Mongoose model
import { authenticateUser } from '../middleware/authMiddleware.js'; // Your authentication middleware
import  { getEvents }  from '../controllers/eventController.js'; 

const router = express.Router();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Ensure 'uploads' folder exists in your project
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Set unique filename
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
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

// Routes
router.get('/', authenticateUser, getEvents); 
router.post('/add-event', authenticateUser, upload.single('eventImage'), async (req, res) => {
  try {
    const { eventTitle, registrationLink, eventDescription, eventDate } = req.body;
    const eventImage = req.file ? req.file.path : '';  

    const newEvent = new Event({
      eventTitle,
      registrationLink,
      eventDescription,
      eventDate,
      eventImage
    });

    await newEvent.save();

    return res.status(201).json({
      success: true,
      message: 'Event created successfully!',
      event: newEvent,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create event',
    });
  }
});
router.get('/all-events',authenticateUser, getEvents);

export default router;