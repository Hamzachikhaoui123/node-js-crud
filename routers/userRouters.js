import express from"express"
import { authUser, getUserProfile, logoutUser, resgisterUser, updateProfile } from "../controllers/userController.js";
const router=express.Router()

router.post('/auth',authUser);
router.post('/register',resgisterUser);
router.post('/logout',logoutUser);
router.get('/profile',getUserProfile);
router.put('/update',updateProfile)

export default router;