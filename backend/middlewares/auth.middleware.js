import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/user.model.js';
import blacklistTokenModel from '../models/blacklistToken.model.js';

export const authUserMiddleware = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isBlackList = await blacklistTokenModel.findOne({token: token});

    if(isBlackList){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try{
        console.log("env", process.env.JWT_SECRETE);
        const decoded = jwt.verify(token, process.env.JWT_SECRETE);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        next();

      
    } catch(err){
        console.error('Error verifying token:', err.message);
        return res.status(401).json({message: 'Unauthorized 1'});
    }

}