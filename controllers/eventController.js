import Event from '../models/Event.js'; // Import the Event model


export const createEvent = async (req, res) => {
  try {
    // Ensure that the uploaded file is logged and available
    console.log('Uploaded file:', req.file);

    const { eventTitle, eventDescription, eventDate, registrationLink } = req.body;
    const eventImage = req.file ? req.file.path : null; 
    
    if (!eventTitle || !eventDescription || !eventDate || !registrationLink) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Event image is required' });
    }

    // Get the file path from the uploaded file
    // const eventImagePath = req.file.path; // This should be correct now

    // Validate `createdBy` (which comes from the user authentication)
    // if (!req.user || !req.user.id) {
    //   return res.status(400).json({ message: 'User not authenticated' });
    // }

    // Create the event object
    const event = new Event({
      eventTitle,
      eventDescription,
      eventDate,
      registrationLink,
      eventImage, 
      // createdBy: req.user.id,      
    });

    // Save the event to the database
    await event.save();

    return res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    console.error('Error in createEvent controller:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (events.length === 0) {
      return res.status(404).json({ success: false, message: 'No events found.' });
    }

    return res.status(200).json({ success: true, events });
  } catch (error) {
    console.error('Error fetching events:', error);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};