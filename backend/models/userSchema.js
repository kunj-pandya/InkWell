import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 character!"],
        minLength: [32, "Name can't exceed 32 character!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone:{
        type: String,
        required: true,
    },
    avatar:{

    },
    eduction:{
        type: String,
        required: true,
    },
    role:{

    },
    password:{
        type: String,
        required: true,
    },
    createdOn:{

    }
});