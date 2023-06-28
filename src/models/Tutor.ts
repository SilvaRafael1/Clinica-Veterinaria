import mongoose from "mongoose";

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name"],
    minlenght: 3,
  },
  phone: {
    type: String,
    require: [true, "Please provide a name"],
    minlenght: 3,
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Please provide a email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  date_of_birth: {
    type: Date,
    require: [true, "Please provide a date of birth"],
  },
  zipcode: {
    type: String,
    require: [true, "Please provide a zipcode"],
  },
});

module.exports = mongoose.model("Tutor", TutorSchema);
