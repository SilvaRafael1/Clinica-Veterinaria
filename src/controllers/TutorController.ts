import { Request, Response } from "express";
import TutorModel from "../models/Tutor";

const getTutors = async (req: Request, res: Response) => {
  const tutors = await TutorModel.find({}).populate('pets');
  if (!tutors) {
    res.send(404).json({ success: false, msg: "Tutors not found" });
  }
  res.status(200).json({ tutors });
};

const createTutor = async (req: Request, res: Response) => {
  try {
    const tutor = await TutorModel.create(req.body);
    res.status(201).json({ success: true, data: tutor });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, msg: "Email address is already registered" })
    }
    res.status(400).json({ success: false, msg: error.message });
  }
};

const updateTutor = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    const tutor = await TutorModel.findOne({ _id: id })
    if (!tutor) {
      return res.status(404).json({ success: false, msg: "Tutor not found" });
    }
    const tutorUpdated = await TutorModel.findOneAndUpdate({ _id: id }, req.body).populate('pets');
    res.status(200).json({ success: true, msg: "Tutor updated", data: tutorUpdated });
  } catch (error: any) {
    res.status(404).json({ success: false, msg: "Tutor not found" });
  }
};

const deleteTutor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tutor = await TutorModel.findOne({ _id: id }).populate('pets')
    if (!tutor) {
      return res.status(404).json({ success: false, msg: "Tutor not found" });
    }

    if (!(tutor?.pets.length === 0)) {
      return res.status(400).json({ success: false, msg: "Tutor have pets associated" });
    }

    await TutorModel.findByIdAndRemove({ _id: id });
    res.status(204).json({});
  } catch (error) {
    res.status(404).json({ success: false, msg: "Tutor not found" });
  }
};

module.exports = {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
};
