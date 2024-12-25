import { validationResult } from "express-validator";
import { getAddressCoordinates, getCaptainsInTheRadius } from "../services/maps.service.js";
import { createRideService, getFareService } from "../services/ride.service.js";
import { sendMessageToSocketId } from "../socket.js";

export const createRide = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await createRideService({ user: req.user._id, pickup, destination, vehicleType });

        const pickupCoordinates = await getAddressCoordinates(pickup);

        
        const captainsInRadius  = await getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 3);
        
        ride.otp = ""

        captainsInRadius.map(captain => {

            console.log(captain, ride, "dddd");
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: ride
            })

        })
        res.status(201).json(ride);


    } catch (err) {
        return res.status(500).json({ message: err.message });
    }   
}

export const getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await getFareService(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
