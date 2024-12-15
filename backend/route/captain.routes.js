import { Router } from 'express';
const captainRoutes = Router();
import {body} from 'express-validator';
import { getCaptainProfle, loginCaptain, logoutCaptain, registerCaptain } from '../controller/captain.controller.js';
import { authCaptainMiddleware } from '../middlewares/auth.middleware.js';

captainRoutes.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle','auto']).withMessage('Invalid type'),
], registerCaptain)

captainRoutes.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be 6 characters long'),
], loginCaptain)

captainRoutes.get('/profile',authCaptainMiddleware, getCaptainProfle)
captainRoutes.get('/logout',authCaptainMiddleware, logoutCaptain)


export default captainRoutes;
