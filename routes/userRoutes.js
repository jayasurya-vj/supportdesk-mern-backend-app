import express from "express";
import userController from "../controllers/userController.js";
import protect  from "../middleware/authMiddleware.js";
 const  router = express.Router();

router.post('/', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', protect, userController.getMe)


export default router;




