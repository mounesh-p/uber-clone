import { Router } from 'express';
const mapsRoutes = Router();
import {  authUserMiddleware } from '../middlewares/auth.middleware.js';
import { getAutoCompleteSuggestions, getCoordinates, getDistanceTime } from '../controller/map.controller.js';
import { query } from 'express-validator';

mapsRoutes.get('/get-coordinates',
    query('address').isString().isLength({min: 3}),
    authUserMiddleware, getCoordinates);

mapsRoutes.get('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min: 3}),
    authUserMiddleware, getDistanceTime);

mapsRoutes.get('/get-suggestions',
    query('input').isString().isLength({min: 3}),
    authUserMiddleware, getAutoCompleteSuggestions);


export default mapsRoutes;