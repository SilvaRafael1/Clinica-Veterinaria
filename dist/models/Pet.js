"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PetSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name"],
        minlenght: 3,
    },
    specie: {
        type: String,
        require: [true, "Please provide a specie"],
        minlenght: 3,
    },
    carry: {
        type: String,
        require: [true, "Please provide a carry"],
    },
    weight: {
        type: Number,
        require: [true, "Please provide a weight"],
    },
    date_of_birth: {
        type: Date,
        require: [true, "Please provide a date of birth"],
    },
});
module.exports = mongoose_1.default.model("Pet", PetSchema);
