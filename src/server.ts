import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server initiate with success in port ${PORT}`);
})
