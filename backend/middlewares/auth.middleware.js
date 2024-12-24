import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import blacklistTokenModel from '../models/blacklistToken.model.js';
import captainModel from '../models/captain.model.js';

export const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isBlackList = await blacklistTokenModel.findOne({token: token});
    if(isBlackList){
        return res.status(401).json({message: 'Unauthorized'});
    }
    console.log("object", token , process.env.JWT_SECRETE);

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRETE);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        next();
    } catch(err){
        console.error('Error verifying token:', err.message);
        return res.status(401).json({message: 'Unauthorized'});
    }

}
export const authCaptainMiddleware = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Unauthorized 1'});
    }

    const isBlackList = await blacklistTokenModel.findOne({token: token});
    if(isBlackList){
        return res.status(401).json({message: 'Unauthorized 2'});
    }
    console.log("d",process.env.JWT_SECRETE);
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRETE);

        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        next();
    } catch(err){
        console.log(err);
        return res.status(401).json({message: 'Unauthorized 3'});
    }

}