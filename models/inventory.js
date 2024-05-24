import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    club: String,
    type: String,
})

export const Inventory = mongoose.model("Inventory", schema);