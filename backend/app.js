import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectToDb from './db/db.js';
import userRoutes from './route/user.routes.js';
import captainRoutes from './route/captain.routes.js';
import mapsRoutes from './route/maps.routes.js';
import rideRoutes from './route/ride.routes.js';

connectToDb();

const app  = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapsRoutes);
app.use('/rides',rideRoutes);

app.get('/',(req, res) =>{
    res.send('Hello World')
})

export default app;