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
        res.status(200).json({ pet: pet, tutor: tutor });
    }
    catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
});
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
