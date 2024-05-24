import {Otp} from "../models/otp.js";

export const generateOTP = async (req, res) =>{
    const {issued_by} = req.body;
    const otp_val = Math.floor(100000 + Math.random() * 900000);
    const otp = await Otp.create({
        otp_val,
        issued_by,
        time: new Date(Date.now()),
    });
    res.status(201).json({
        success: true,
        otp,
    });
};
export const updateOTP = async (req, res) =>{
    const {otp_id} = req.params;
    const {approved_by,status} = req.body;
    const otp = await Otp.findById(otp_id);
    if(!otp){
        return res.status(404).json({success:false,error:"OTP not found"});
    }
    otp.approved_by = approved_by;
    otp.status = status;
    otp.time = new Date(Date.now());
    await otp.save();
    res.json({
        success: true,
        otp,
    });
};
export const deleteOTP = async (req, res) =>{
    const {otp_id}=req.params;
    
    const otp= await Otp.findById(otp_id);
    if(!otp){
        return res.status(404).json({success:false,error:"OTP not found"});
    }

    await otp.deleteOne();  
    res.json({
        success:true,
        message:'Otp deleted',});
};