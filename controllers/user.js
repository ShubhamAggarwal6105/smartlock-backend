import {User} from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users,
    });
};

export const registerUser = async (req, res) => {
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });

    res.status(201).json({
        success: true,
        message: "Registered succesfully"
    });
};