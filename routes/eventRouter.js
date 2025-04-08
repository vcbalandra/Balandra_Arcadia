import express from 'express';
import multer from 'multer';
import path from 'path';
import Event from '../models/Event.js'; 
import { authenticateUser } from '../middleware/authMiddleware.js'; 
import  { getEvents }  from '../controllers/eventController.js'; 

const router = express.Router();


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

router.put('/update-event/:eventId', authenticateUser, upload.single('eventImage'), async (req, res) => {
  try {
    const { eventId } = req.params;
    const { eventTitle, registrationLink, eventDescription, eventDate } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    let eventImage = event.eventImage;
    if (req.file) {
      eventImage = req.file.path;
    }

    const updatedEventDate = eventDate || event.eventDate;

    event.eventTitle = eventTitle;
    event.registrationLink = registrationLink;
    event.eventDescription = eventDescription;
    event.eventDate = updatedEventDate;
    event.eventImage = eventImage;

    await event.save();

    return res.status(200).json({
      success: true,
      message: 'Event updated successfully!',
      event,
    });
  } catch (error) {
    console.error("Error updating event:", error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update event',
    });
  }
});

router.get('/all-events', getEvents);


export default router;