import { ParseResponse } from "../utils/requestUtils.js";
import jwt from "jsonwebtoken";

type userData = {
  username: string;
  passowrd: string;
};

class TokenService {
  async validate(token: string) {
    try {
      const secretKey = process.env.JWT_SECRET_KEY as string;
      if (jwt.verify(token, secretKey) === false) throw new Error("Invalid or expired Token");
    }
    catch (err) {
      console.log(err);
      return new ParseResponse(false, err.message); 
    }
  }

  async create(data: userData) {

  }
}

export default new TokenService();
