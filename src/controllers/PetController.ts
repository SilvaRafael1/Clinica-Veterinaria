import { Request, Response } from "express";
const StatusCodes = require("http-status-code");

const createPet = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

const updatePet = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

const deletePet = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

module.exports = {
  createPet,
  updatePet,
  deletePet,
};
