"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tutor_1 = __importDefault(require("../models/Tutor"));
const getTutors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tutors = yield Tutor_1.default.find({});
    if (!tutors) {
        res.send(404).json({ success: false, msg: "Tutors not found" });
    }
    res.status(200).json({ tutors });
});
const createTutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutor = yield Tutor_1.default.create(req.body);
        res.status(201).json({ success: true, data: tutor });
    }
    catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
});
const updateTutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Tutor_1.default.findOneAndUpdate({ _id: id }, req.body);
        const tutor = yield Tutor_1.default.findOne({ _id: id });
        if (!tutor) {
            return res.status(404).json({ success: false, msg: "Tutor not found" });
        }
        res.status(200).json({ success: true, msg: "Tutor updated", data: tutor });
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Tutor not found" });
    }
});
const deleteTutor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tutor = yield Tutor_1.default.findByIdAndRemove({ _id: id });
        res.status(204).json({});
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Tutor not found" });
    }
});
module.exports = {
    getTutors,
    createTutor,
    updateTutor,
    deleteTutor,
};
