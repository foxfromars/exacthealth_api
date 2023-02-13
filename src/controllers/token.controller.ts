import { ParseResponse } from "../utils/requestUtils.js";

class TokenController {
  async get(req, res) {
    try {
      if(!req.headers["authorization"]) throw new Error("Missing Authorization Token");
      const token = req.headers["authorization"]).split(" ")[1];
      const result = await tokenService.get();
      res.json(result);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async post(req, res) {
    try {
      if (!req.body.username || !req.body.password) throw new Error("Missing Credentials");
      const response = await tokenService.post(req.body);
      res.json(response);
    }
    catch (err) {
      console.log(err);
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }
}
