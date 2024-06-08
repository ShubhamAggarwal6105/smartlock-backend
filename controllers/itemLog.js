import { ItemLog } from "../models/itemLog.js";

export const requestItem = async (req, res) => {
    try {
        const { name, issued_by, reviewer } = req.body;
        const newItemLog = new ItemLog({ name, issued_by, reviewer, type: 'issued' });
        await newItemLog.save();
        res.status(201).json(newItemLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateItemStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, reviewer } = req.body;
        const updatedItemLog = await ItemLog.findByIdAndUpdate(id, { status, reviewer }, { new: true });
        res.status(200).json(updatedItemLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const returnItem = async (req, res) => {
    try {
        const { name, issued_by } = req.body;
        const newItemLog = new ItemLog({ name, issued_by, type: 'returned' });
        await newItemLog.save();
        res.status(201).json(newItemLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getItemLogs = async (req, res) => {
    try {
        const logs = await ItemLog.find();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
