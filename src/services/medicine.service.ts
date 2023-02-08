import { ParseResponse } from "../utils/requestUtils.js";
import * as database from "../models/index.cjs";

class MedicineController {
  async getAll() {
    try {
      const response = await database.default.Medicine.findAll();
      return new ParseResponse(true, response);
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }

  async getOne(id: number) {
    try {
      const response = await database.default.Medicine.findOne({
        where: {
          id,
        }
      });
      return new ParseResponse(true, response);
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }

  async post(data: object) {
    try {
      await database.default.Medicine.create(data);
      return new ParseResponse(true, "Data insert with success");
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }

  async update(id: number, data: object) {
    try {
      await database.default.Medicine.update(data, {
        where: {
          id,
        }
      })
      return new ParseResponse(true, "Data updated with success");
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }

  async delete(id) {
    try {
      await database.default.Medicine.destroy({
        where: {
          id,
        }
      })
      return new ParseResponse(true, "Data deleted with success");
    }
    catch (err) {
      return new ParseResponse(false, err.message);
    }
  }
}

export default new MedicineController();
