import { Request, Response } from "express";
const StatusCodes = require("http-status-code");

const Auth = (req: Request, res: Response) => {
  res.status(200).json({ msg: "Auth" });
};

module.exports = {
  Auth,
};
