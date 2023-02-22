import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";
import medicineRoutes from "./routes/medicine.route.js";
import tokenRoutes from "./routes/token.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/medicine", medicineRoutes);
app.use("/token", tokenRoutes);

app.listen(PORT, () => {
  console.log(`server initiate with success in port ${PORT}`);
})
