import { Request, Response } from "express";

const getTutors = (req: Request, res: Response) => {
  res.status(200).json({ msg: "getTutors" });
};

const createTutor = (req: Request, res: Response) => {
  res.status(200).json({ msg: "createTutor" });
};

const updateTutor = (req: Request, res: Response) => {
  res.status(200).json({ msg: "updateTutor" });
};

const deleteTutor = (req: Request, res: Response) => {
  res.status(200).json({ msg: "deleteTutor" });
};

module.exports = {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
};
