import { Router } from 'express';
const routes = Router();
import {body} from 'express-validator';
import { getUserProfle, loginUser, logoutUser, registerUser } from '../controller/user.controller.js';
import { authUserMiddleware } from '../middlewares/auth.middleware.js';

routes.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 characters long'),
], registerUser)

routes.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 characters long'),
], loginUser)

routes.get('/profile',authUserMiddleware, getUserProfle)
routes.get('/logout',authUserMiddleware, logoutUser)

export default routes;
