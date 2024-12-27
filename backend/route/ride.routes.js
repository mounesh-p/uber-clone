import { Router } from 'express';
import { body, query } from 'express-validator';
import { confirmRide, createRide, endRide, getFare, startRide } from '../controller/ride.controller.js';
import { authCaptainMiddleware, authUserMiddleware } from '../middlewares/auth.middleware.js';
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

rideRoutes.post('/confirm',
    authCaptainMiddleware,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    confirmRide
)

rideRoutes.get('/start-ride',
    authCaptainMiddleware,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    startRide
)

rideRoutes.post('/end-ride',
    authCaptainMiddleware,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    endRide
)


export default rideRoutes;