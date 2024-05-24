import express from "express";
import userRouter from "./routes/user.js";
import itemRouter from "./routes/inventory.js";
import {config} from "dotenv";

export const app = express();

config({
    path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use("/items", itemRouter);

app.get("/", (req, res)=>{
    res.send("Nice working");
});
