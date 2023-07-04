import jwt from "jsonwebtoken";

import {
  ResponseError
} from "../utils/errorUtils.js";
import {
  ParseResponse
} from "../utils/requestUtils.js";

export default async function authenticationMiddleware(req, res, next) {
  try {
    const tokenSecretKey: string = process.env.JWT_SECRET_KEY as string;

    if (!req.headers["authorization"]) throw new ResponseError({
      code: 401,
      message: "Missing Authorization Token",
    });

    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, tokenSecretKey);

    req.user = jwt.decode(token);
    next();
  } catch (err) {
    res.status(err?.code ? err.code : 500).json(
      new ParseResponse(false, err.message)
    );
  }
}
