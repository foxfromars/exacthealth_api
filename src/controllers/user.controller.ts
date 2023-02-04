import userService from "../services/user.service.js";
import { ParseResponse } from "../utils/requestUtils.js";

class UserController {
  async getAll(_, res) {
    try {
      const response = await userService.getAll();
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async getOne(req, res) {
    try {
      if (!req.params.id) throw new Error("Missing id");
      const response = await userService.getOne(req.params.id)
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async post(req, res) {
    try {
      console.log(req.body);
      if (!req.body) throw new Error("Missing Data");
      const response = await userService.post(req.body);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async update(req, res) {
    try {
      if(!req.body) throw new Error("Missing Data");
      const response = await userService.update(req.body);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async delete(req, res) {
    try {
      if(!req.params.id) throw new Error("Missing ID");
      const response = await userService.delete(req.params.id);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }
}

export default new UserController();
