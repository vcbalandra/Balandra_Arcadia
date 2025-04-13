import { Router } from 'express';
import {
  getCurrentUser,
  updateUser,
  getAllUsers,
  updateUserRole,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  authenticateUser, 
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

router.get('/all-users' ,authenticateUser, getAllUsers);
router.put('/user-update/:id' ,authenticateUser, updateUserRole);

export default router;
