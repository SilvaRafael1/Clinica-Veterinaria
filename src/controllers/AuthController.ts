import { Request, Response } from "express";
import TutorModel from "../models/Tutor";
import jwt from "jsonwebtoken";
const bcrypt = require("bcryptjs");

import config from "dotenv";
config.config();

const Auth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json("All input is required");
    }

    const tutor = await TutorModel.findOne({ email });
    if (!tutor) {
      return res.status(401).json("Invalid Credential");
    }

    const comparePassword = await bcrypt.compare(password, tutor?.password);
    if (!comparePassword) {
      return res.status(401).json("Invalid Credential");
    }

    const token = jwt.sign({ user_id: tutor?._id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });

    res.status(200).json({ access_token: token });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  Auth,
};
