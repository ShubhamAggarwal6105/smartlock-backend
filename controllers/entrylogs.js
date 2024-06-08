import { EntryLog } from "../models/entryLog.js";

export const issueOTP = async (req, res) => {
    try {
        const { issued_by, status, reviewer } = req.body;
        const newEntryLog = new EntryLog({ issued_by, status, reviewer });
        await newEntryLog.save();
        res.status(201).json(newEntryLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteLog = async (req, res) => {
    try {
        const { id } = req.params;
        await EntryLog.findByIdAndDelete(id);
        res.status(200).json({ message: 'Log deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
