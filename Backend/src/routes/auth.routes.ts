// routes/authRoutes.js
import express from 'express'
const authRouter = express.Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.signin);

module.exports = authRouter;
