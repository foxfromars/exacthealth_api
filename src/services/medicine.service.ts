import { ParseResponse } from "../utils/requestUtils.js";
import * as database from "../models/index.cjs";

class MedicineController {
  async getAll() {
    const response = await database.default.Medicine.findAll();
    return new ParseResponse(true, response);
  }

  async getOne(id: number) {
    const response = await database.default.Medicine.findOne({
      where: {
        id,
      }
    });
    return new ParseResponse(true, response);
  }

  async post(data: object, username: string) {
    const userId = await database.default.User.findOne({
      where: {
        username,
      }
    })
      .then((e: any) => e.id);

    console.log(data);
    const result = await database.default.Medicine.create({
      ...data,
      userId,
    });
    console.log(result);

    return new ParseResponse(true, "Data insert with success");
  }

  async update(id: number, data: object) {
    await database.default.Medicine.update(data, {
      where: {
        id,
      }
    })
    return new ParseResponse(true, "Data updated with success");
  }

  async delete(id) {
    await database.default.Medicine.destroy({
      where: {
        id,
      }
    })
    return new ParseResponse(true, "Data deleted with success");
  }
}

export default new MedicineController();
