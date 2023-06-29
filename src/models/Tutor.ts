import mongoose, { Schema, Document, Model } from "mongoose";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlenght: 3,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
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
    unique: [true, "E-mail already exists"],
  },
  date_of_birth: {
    type: Date,
    required: [true, "Please provide a date of birth"],
  },
  zipcode: {
    type: String,
    required: [true, "Please provide a zipcode"],
  },
  
})

TutorSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

TutorSchema.methods.createJWT = function () { 
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME
    }
  )
}

TutorSchema.methods.checkPassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

const TutorModel = mongoose.model("Tutor", TutorSchema);
export default TutorModel;
