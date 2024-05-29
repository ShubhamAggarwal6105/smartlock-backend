import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name: {type:String,required:true},
    club: {type:String,required:true},
    type: {type:String,required:true}

});

export const Inventory = mongoose.model("Inventory", schema);