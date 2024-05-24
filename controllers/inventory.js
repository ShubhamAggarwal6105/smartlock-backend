import {Inventory} from "../models/inventory.js";

export const addItem = async (req, res) => {
    const {name, type} = req.body;

    await Inventory.create({
        name,
        type,
    });

    res.status(201).json({
        success: true,
        message: "Created succesfully"
    });
};
