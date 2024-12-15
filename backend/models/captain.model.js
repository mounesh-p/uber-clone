import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname :{
            type: String,
            required: true,
            minlength : [3, "First name must be at least 3 character long" ]
        },
        lastname :{
            type: String,
            minlength : [3, "First name must be at least 3 character long" ]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength : [5, "Email must be at least 5 character long" ],
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email']

    },
    password: {
        type: String,
        required: true,
        select: false
    },
    sockerId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    vehicle: {
        color :{
            type: String,
            require: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            require: true,
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            require: true,
            minlength: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            require: true,
            enum: ['car', 'motorcycle','auto'],
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRETE, { expiresIn: "24h" })
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema);

export default captainModel;