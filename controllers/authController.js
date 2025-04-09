import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
// import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Email is invalid.' });
    }

    const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Password is incorrect.' });
  } 

  if (user.role !== 'admin') {
    return res.status(StatusCodes.FORBIDDEN).json({ msg: 'You are not authorized yet. Please wait for email confirmation.' });
  }

    const token = createJWT({ userId: user._id, role: user.role });
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(StatusCodes.OK).json({ msg: 'User logged in' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error' });
  }
};

export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};
