import { Router } from "express";
import medicineController from "../controllers/medicine.controller.js";
import authenticationnMiddleware from "../middlewares/authentication.middleware.js";

const route = Router();

route.get("/", authenticationnMiddleware, medicineController.getAll);
route.get("/", authenticationnMiddleware, medicineController.getOne);
route.post("/", authenticationnMiddleware, medicineController.post);
route.put("/", authenticationnMiddleware, medicineController.update);
route.delete("/", authenticationnMiddleware, medicineController.delete);

export default route;
