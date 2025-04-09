import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// User Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide a last name'],
    },
    location: {
      type: String,
      required: [true, 'Please provide a location'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin',
    },
    avatar: String,
    avatarPublicId: String,
  },
  { timestamps: true }
);


// Remove password from the response object
UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = mongoose.model('User', UserSchema);

export default User;