import Partner from '../models/Partner.js';


export const createPartner = async (req, res) => {
  try {
    console.log('Uploaded file:', req.file);

    const { partnerName, partnerDescription, partnerWebsite } = req.body;
    const partnerImage = req.file ? req.file.path : null; 
    
    if (!eventTitle || !eventDescription || !eventDate || !registrationLink) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Partner image is required' });
    }

    // Get the file path from the uploaded file
    // const eventImagePath = req.file.path; // This should be correct now

    // Validate `createdBy` (which comes from the user authentication)
    // if (!req.user || !req.user.id) {
    //   return res.status(400).json({ message: 'User not authenticated' });
    // }

    // Create the event object
    const partner = new Partner({
      partnerName,
      partnerDescription,
      partnerWebsite,
      partnerImage,   
    });

    // Save the event to the database
    await partner.save();

    return res.status(201).json({ message: 'Partner created successfully', partner });
  } catch (error) {
    console.error('Error in createPartner controller:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};


export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();

    if (partners.length === 0) {
      return res.status(404).json({ success: false, message: 'No partners found.' });
    }

    return res.status(200).json({ success: true, partners });
  } catch (error) {
    console.error('Error fetching partners:', error);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
};