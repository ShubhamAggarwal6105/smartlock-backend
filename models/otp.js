import mongoose from "mongoose";

const schema = new mongoose.Schema({
    otp_val: String,
    issued_by:{
        type: String,
        required: true,
    },
    
    status:{
        type: String,
        default: "pending",
    },
    
    time:{
        type:Date,
    },

    approved_by:{
        type: String,
        default: null,
    },
    
})

export const Otp = mongoose.model("Otp", schema);