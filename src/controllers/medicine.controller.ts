import medicineService from "../services/medicine.service.js";
import { ParseResponse } from "../utils/requestUtils.js";

class MedicineController {
  async getAll(_, res) {
    try {
      const response = await medicineService.getAll();
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async getOne(req, res) {
    try {
      if (!req.params) throw new Error("Missing ID");
      const response = await medicineService.getOne(req.params.id);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async post(req, res) {
    try {
      const userData = req.userData;
      if (!req.body) throw new Error("Missing data body");
      const response = await medicineService.post(req.body);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async update(req, res) {
    try {
      if (!req.params || !req.body) throw new Error("Missing data");
      const response = await medicineService.update(req.params.id, req.body);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }

  async delete(req, res) {
    try {
      if (!req.params) throw new Error("Missing ID");
      const response = await medicineService.delete(req.params.id);
      res.json(response);
    }
    catch (err) {
      res.status(500).json(new ParseResponse(false, err.message));
    }
  }
}

export default new MedicineController();
