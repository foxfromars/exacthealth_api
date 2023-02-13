import { Router } from "express";
import medicineController from "../controllers/medicine.controller.js";

const route = Router();

route.get("/", medicineController.getAll);
route.get("/", medicineController.getOne);
route.post("/", medicineController.post);
route.put("/", medicineController.update);
route.delete("/", medicineController.delete);

export default route;
