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
const Pet_1 = __importDefault(require("../models/Pet"));
const createPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tutorId } = req.params;
    try {
        const pet = yield Pet_1.default.create(req.body);
        const tutor = yield Tutor_1.default.findOne({ _id: tutorId });
        tutor === null || tutor === void 0 ? void 0 : tutor.pets.push(pet._id);
        yield (tutor === null || tutor === void 0 ? void 0 : tutor.save());
        res.status(200).json({ pet: pet });
    }
    catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
});
const updatePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { petId, tutorId } = req.params;
    try {
        const pet = yield Pet_1.default.findOne({ _id: petId });
        if (!pet) {
            return res.status(404).json({ success: false, msg: "Pet not found" });
        }
        const tutor = yield Tutor_1.default.findOne({ _id: tutorId });
        if (!tutor) {
            return res.status(404).json({ success: false, msg: "Tutor not found" });
        }
        yield Pet_1.default.findOneAndUpdate({ _id: petId }, req.body);
        const petUpdated = yield Pet_1.default.findOne({ _id: petId });
        res.status(200).json({ success: true, msg: "Pet updated", data: petUpdated });
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Pet not found" });
    }
});
const deletePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { petId, tutorId } = req.params;
    try {
        const pet = yield Pet_1.default.findOne({ _id: petId });
        if (!pet) {
            return res.status(404).json({ success: false, msg: "Pet not found" });
        }
        const tutor = yield Tutor_1.default.findOne({ _id: tutorId });
        if (!tutor) {
            return res.status(404).json({ success: false, msg: "Tutor not found" });
        }
        yield Pet_1.default.findOneAndRemove({ _id: petId });
        res.status(204).json({});
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Pet not found" });
    }
});
module.exports = {
    createPet,
    updatePet,
    deletePet,
};
