import { ParseResponse } from "../utils/requestUtils.js";
import jwt from "jsonwebtoken";
import * as database from "../models/index.cjs";

type userData = {
  username: string;
  password: string;
};

class TokenService {
  async validate(token: string) {
    try {
      const secretKey = process.env.JWT_SECRET_KEY as string;
      jwt.verify(token, secretKey);
      return new ParseResponse(true, "The token is valid");
    }
    catch (err) {
      console.log(err);
      return new ParseResponse(false, err.message);
    }
  }

  async create(data: userData) {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const { username } = await database.default.User.findOne({
      where: {
        username: data.username,
        password: data.password,
      }
    })
    const token = jwt.sign(username, secretKey);
    return new ParseResponse(true, token);
  }
}

export default new TokenService();
