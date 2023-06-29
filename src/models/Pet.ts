import mongoose, { Schema } from "mongoose";

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlenght: 3,
  },
  specie: {
    type: String,
    required: [true, "Please provide a specie"],
    minlenght: 3,
  },
  carry: {
    type: String,
    required: [true, "Please provide a carry"],
  },
  weight: {
    type: Number,
    required: [true, "Please provide a weight"],
  },
  date_of_birth: {
    type: Date,
    required: [true, "Please provide a date of birth"],
  },
});

const PetModel = mongoose.model("Pet", PetSchema)
export default PetModel
