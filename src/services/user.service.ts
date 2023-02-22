import * as database from "../models/index.cjs";
import { ParseResponse } from "../utils/requestUtils.js";

class UserService {
  async getAll() {
    try {
      const response = await database.default.User.findAll();
      return new ParseResponse(true, response);
    }
    catch (err) {
      console.log(err);
      return new ParseResponse(false, err.message);
    }
  }

  async getOne(id: number) {
    try {
      if (!id) throw new Error("Missing Id");
      const response = await database.default.User.findOne({
        where: {
          id
        },
      });
      return new ParseResponse(true, response);
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }

  async post(data: object) {
    try {
      if (!data) throw new Error("Missing Data");
      await database.default.User.create(data);
      return new ParseResponse(true, "Data insert with success");
    }
    catch (err) {
      console.log(err);
      return new ParseResponse(false, err.message);
    }
  }

  async update(id: number, data: object) {
    try {
      if (!data) throw new Error("Missing Data");
      await database.default.User.update({ ...data });
      return new ParseResponse(true, "Data updated with success");
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }

  async delete(id: number) {
    try {
      if (!id) throw new Error("Missing Id");
      await database.default.User.destroy({
        where: {
          id
        }
      })
      return new ParseResponse(true, "Data deleted with success");
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }
}

export default new UserService();
