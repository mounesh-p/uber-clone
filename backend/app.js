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

// Configure CORS
const allowedOrigins = ['https://uber-clone-3tah-50ppdeh7x-mounesh-ps-projects.vercel.app'];
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

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