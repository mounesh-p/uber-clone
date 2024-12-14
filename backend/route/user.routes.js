import { Router } from 'express';
const routes = Router();
import {body} from 'express-validator';
import { registerUser } from '../controller/user.controller.js';

routes.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 characters long'),
], registerUser)

export default routes;
