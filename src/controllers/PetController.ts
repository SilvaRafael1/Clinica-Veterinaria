import { Request, Response } from "express";
import TutorModel from "../models/Tutor";
import PetModel from "../models/Pet";

const createPet = async (req: Request, res: Response) => {
  const {tutorId} = req.params
  try {
    const pet = await PetModel.create(req.body);
    const tutor = await TutorModel.findOne({ _id: tutorId })
    tutor?.pets.push(pet)
    await tutor?.save()
    res.status(200).json({ pet: pet, tutor: tutor });
  } catch (error:any) {
    res.status(400).json({ success: false, msg: error.message });
  }
  
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
