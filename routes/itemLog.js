import mongoose from "mongoose";

const itemLogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    issued_by: { type: String, required: true },
    status: { type: String, default: 'pending' },
    reviewer: { type: String, default: null },
    time: { type: Date, default: Date.now },
    type: { type: String, required: true }
});

export const ItemLog = mongoose.model("ItemLog", itemLogSchema);
