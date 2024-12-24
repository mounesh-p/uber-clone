import { Router } from 'express';
import { body, query } from 'express-validator';
import { createRide, getFare } from '../controller/ride.controller.js';
import { authUserMiddleware } from '../middlewares/auth.middleware.js';
const rideRoutes = Router();

rideRoutes.post('/create',
    authUserMiddleware,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
    createRide
);

rideRoutes.get('/get-fare',
    authUserMiddleware,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    getFare
)

export default rideRoutes;