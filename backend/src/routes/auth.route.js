import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js" //.js extension is important when using module

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router