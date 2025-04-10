import { Router } from 'express';
import {
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions 
} from '../middleware/authMiddleware.js';
import { uploadMemory } from '../middleware/multerMiddleware.js';
const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/profile', [
  authorizePermissions('user'),
]);
router.patch(
  '/update-user',
  uploadMemory.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default router;
