import mongoose from "mongoose";

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlenght: 3,
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone"],
    minlenght: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  date_of_birth: {
    type: Date,
    required: [true, "Please provide a date of birth"],
  },
  zipcode: {
    type: String,
    required: [true, "Please provide a zipcode"],
  },
});

const TutorModel = mongoose.model("Tutor", TutorSchema);
export default TutorModel;
