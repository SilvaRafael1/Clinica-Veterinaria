import { Request, Response } from "express";
const StatusCodes = require("http-status-code");

const getTutors = (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ msg: "getTutors" });
};

const createTutor = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

const updateTutor = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

const deleteTutor = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

module.exports = {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
};
