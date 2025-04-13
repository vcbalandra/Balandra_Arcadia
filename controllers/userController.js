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
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: 'update user' });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!['user', 'admin', 'superAdmin'].includes(role)) {
    return res.status(400).json({ msg: 'Invalid role' });
  }

  const user = await User.findByIdAndUpdate(id, { role }, { new: true });

  if (!user) {
    return res.status(404).json({ msg: 'User not found' });
  }

  res.json({ msg: 'Role updated', user });
};

