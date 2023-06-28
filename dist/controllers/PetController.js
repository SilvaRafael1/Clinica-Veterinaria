"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes = require("http-status-code");
const createPet = (req, res) => {
    res.status(200).json({ msg: "createPet" });
};
const updatePet = (req, res) => {
    res.status(200).json({ msg: "updatePet" });
};
const deletePet = (req, res) => {
    res.status(200).json({ msg: "deletePet" });
};
module.exports = {
    createPet,
    updatePet,
    deletePet,
};
