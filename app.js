import express from "express";
import userRouter from "./routes/user.js";
import itemRouter from "./routes/inventory.js";
import mongoose from "mongoose";
import itemLogRoutes from "./routes/itemLog.js";
import OTProuter from "./routes/otp.js";
import {config} from "dotenv";

export const app = express();

config({
    path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use("/items", itemRouter);
app.use("/otp", OTProuter);
app.use("/api/itemlog", itemLogRoutes);

mongoose.connect('mongodb://localhost:27017/inventoryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/", (req, res)=>{
    res.send("Nice working");
});
