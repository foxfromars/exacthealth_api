import { ParseResponse } from "../utils/requestUtils.js";
import tokenService from "../services/token.service.js";

class TokenController {
  async get(req, res) {
    try {
      if (!req.headers["authorization"]) throw new Error("Missing Authorization Token");
      const token = req.headers["authorization"].split(" ")[1];
      const result = await tokenService.validate(token);
      res.json(result);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async post(req, res) {
    try {
      console.log(req.body);
      if (!req.body.username || !req.body.password) throw new Error("Missing Credentials");
      const response = await tokenService.create(req.body);
      res.json(response);
    }
    catch (err) {
      res.status(err?.code ? err.code : 500).json(new ParseResponse(false, err.message));
    }
  }
}

export default new TokenController();
