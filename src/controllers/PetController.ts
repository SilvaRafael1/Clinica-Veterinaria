import { Request, Response } from "express";
const StatusCodes = require("http-status-code");

const createPet = (req: Request, res: Response) => {
  res.status(200).json({ msg: "createPet" });
};

const updatePet = (req: Request, res: Response) => {
  res.status(200).json({ msg: "updatePet" });
};

const deletePet = (req: Request, res: Response) => {
  res.status(200).json({ msg: "deletePet" });
};

module.exports = {
  createPet,
  updatePet,
  deletePet,
};
