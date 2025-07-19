import { Router } from "express";
import { userLogin } from "../controllers/auth.controllers.js";

const router = Router()



router.post('/login', userLogin)





router.post('/login', userLogin)

export default router