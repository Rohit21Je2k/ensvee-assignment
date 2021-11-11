import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user-routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// cors
app.use(cors());

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// api
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", userRouter);

// path not found
app.use((req, res, next) => {
  res.status(400).send({
    message: "path does not exist",
  });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s4fs8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log("connection to server and database established");
  })
  .catch((err) => console.log(err));
