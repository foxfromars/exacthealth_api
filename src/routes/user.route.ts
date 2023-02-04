import { Router  } from "express";
import userController from "../controllers/user.controller.js";

const route = Router();
route.get("/", userController.getAll);
route.get("/:id", userController.getOne);
route.post("/", userController.post);
route.put("/", userController.update);
route.delete("/:id", userController.delete);

export default route;
