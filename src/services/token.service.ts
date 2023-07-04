import { ParseResponse } from "../utils/requestUtils.js";
import {
  ResponseError
} from "../utils/errorUtils.js";
import jwt from "jsonwebtoken";
import * as database from "../models/index.cjs";

type userData = {
  username: string;
  password: string;
};

class TokenService {
  async validate(token: string) {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    jwt.verify(token, secretKey);
    const username = jwt.decode(token);
    return new ParseResponse(true, username);
  }

  async create(data: userData) {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const result = await database.default.User.findOne({
      where: {
        username: data.username,
        password: data.password,
      },
      attributes: ["username"],
    });

    if (!result) throw new ResponseError({
      code: 401,
      message: "Username not found or password is wrong",
    });

    const token = jwt.sign(result.username, secretKey);
    return new ParseResponse(true, token);
  }
}

export default new TokenService();
