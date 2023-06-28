"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTutors = (req, res) => {
    res.status(200).json({ msg: "getTutors" });
};
const createTutor = (req, res) => {
    res.status(200).json({ msg: "createTutor" });
};
const updateTutor = (req, res) => {
    res.status(200).json({ msg: "updateTutor" });
};
const deleteTutor = (req, res) => {
    res.status(200).json({ msg: "deleteTutor" });
};
module.exports = {
    getTutors,
    createTutor,
    updateTutor,
    deleteTutor,
};
