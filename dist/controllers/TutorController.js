"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes = require("http-status-code");
const getTutors = (req, res) => {
    res.status(StatusCodes.OK).json({ msg: "getTutors" });
};
const createTutor = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
const updateTutor = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
const deleteTutor = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
module.exports = {
    getTutors,
    createTutor,
    updateTutor,
    deleteTutor,
};
