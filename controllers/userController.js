import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  delete newUser.role;

  if (req.file) {
    try {
      if (!req.file.buffer) {
        return res.status(400).json({ msg: 'File data is missing or invalid' });
      }

      const file = formatImage(req.file); 

      const response = await cloudinary.v2.uploader.upload(file);
      newUser.avatar = response.secure_url;
      newUser.avatarPublicId = response.public_id;

      if (req.user.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(req.user.avatarPublicId);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return res.status(500).json({ msg: 'Error uploading image to Cloudinary' });
    }
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser, { new: true });

  if (!updatedUser) {
    return res.status(404).json({ msg: 'User not found' });
  }

  res.status(200).json({ msg: 'User updated successfully', updatedUser });
};
