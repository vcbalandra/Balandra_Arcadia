import express from 'express';
import { register, logout, login } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';


const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, 
  max: 20, 
  message: { msg: 'IP rate limit exceeded, retry in 15 minutes.' },
});

// Logout route
router.get('/logout', logout);

// Register route
router.post('/register', apiLimiter, validateRegisterInput, register);

// Login route
router.post('/login', apiLimiter, validateLoginInput, login)


export default router;