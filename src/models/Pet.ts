import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name"],
    minlenght: 3,
  },
  specie: {
    type: String,
    require: [true, "Please provide a specie"],
    minlenght: 3,
  },
  carry: {
    type: String,
    require: [true, "Please provide a carry"],
  },
  weight: {
    type: Number,
    require: [true, "Please provide a weight"],
  },
  date_of_birth: {
    type: Date,
    require: [true, "Please provide a date of birth"],
  },
});

module.exports = mongoose.model("Pet", PetSchema);
