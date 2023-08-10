import {Router} from 'express';
import { deleteUser, getUser } from '../controllers/usersControllers.js';
import {verifyToken} from '../middleware/jwt.js'

const router = Router();

router.get("/:id", getUser);
router.delete("/:id", verifyToken, deleteUser)

export default router;