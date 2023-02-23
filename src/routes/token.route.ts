import { Router } from "express";
import tokenController from "../controllers/token.controller.js";

const routes = Router();

routes.get("/", tokenController.get);
routes.post("/", tokenController.post);

export default routes;
