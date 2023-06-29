"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PetSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlenght: 3,
    },
    specie: {
        type: String,
        required: [true, "Please provide a specie"],
        minlenght: 3,
    },
    carry: {
        type: String,
        required: [true, "Please provide a carry"],
    },
    weight: {
        type: Number,
        required: [true, "Please provide a weight"],
    },
    date_of_birth: {
        type: Date,
        required: [true, "Please provide a date of birth"],
    },
});
const PetModel = mongoose_1.default.model("Pet", PetSchema);
exports.default = PetModel;
