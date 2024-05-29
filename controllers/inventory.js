import {Inventory} from "../models/inventory.js";

export const addItem = async (req, res) => {
    try {
        const { name, club, type } = req.body;
        const newItem = new Inventory({ name, club, type });
        await newItem.save();
        res.status(201).json(newItem);
    }   catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Inventory.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item deleted successfully' });
    }   catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const editItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, club, type } = req.body;
        const updatedItem = await Inventory.findByIdAndUpdate(id, { name, club, type }, { new: true });
        res.status(200).json(updatedItem);
    }   catch (error) {
        res.status(500).json({ message: error.message });
    }
};