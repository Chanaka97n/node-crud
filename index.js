import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import usersRoute from "./routes/users.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to backend");
});

app.use("/user", usersRoute);

mongoose
  .connect(
    "mongodb+srv://chanaka97n:sKl8hjDVOgUzo3aM@cluster0.rcfoliv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
