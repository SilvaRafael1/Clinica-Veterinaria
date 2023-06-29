import { Request, Response } from "express";
import TutorModel from "../models/Tutor";
import PetModel from "../models/Pet";

const createPet = async (req: Request, res: Response) => {
  const { tutorId } = req.params;
  try {
    const pet = await PetModel.create(req.body);
    const tutor = await TutorModel.findOne({ _id: tutorId });
    tutor?.pets.push(pet._id);
    await tutor?.save();
    res.status(200).json({ pet: pet });
  } catch (error: any) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

const updatePet = async (req: Request, res: Response) => {
  const { petId, tutorId } = req.params;

  try {
    const pet = await PetModel.findOne({ _id: petId });
    if (!pet) {
      return res.status(404).json({ success: false, msg: "Pet not found"})
    }
    const tutor = await TutorModel.findOne({ _id: tutorId });
    if (!tutor) {
      return res.status(404).json({ success: false, msg: "Tutor not found"})
    }
    const petUpdated = await PetModel.findOneAndUpdate({ _id: petId }, req.body)
    res.status(200).json({ success: true, msg: "Pet updated", data: petUpdated });
  } catch (error:any) {
    res.status(404).json({ success: false, msg: "Pet not found" });
  }
};

const deletePet = async (req: Request, res: Response) => {
  const { petId, tutorId } = req.params;

  try {
    const pet = await PetModel.findOne({ _id: petId });
    if (!pet) {
      return res.status(404).json({ success: false, msg: "Pet not found"})
    }
    const tutor = await TutorModel.findOne({ _id: tutorId });
    if (!tutor) {
      return res.status(404).json({ success: false, msg: "Tutor not found"})
    }

    await PetModel.findOneAndRemove({ _id: petId });
    res.status(204).json({});
  } catch (error: any) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = {
  createPet,
  updatePet,
  deletePet,
};
