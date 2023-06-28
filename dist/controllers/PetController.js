"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes = require("http-status-code");
const createPet = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
const updatePet = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
const deletePet = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
module.exports = {
    createPet,
    updatePet,
    deletePet,
};
