"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TutorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlenght: 3,
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone"],
        minlenght: 3,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
        unique: true,
    },
    date_of_birth: {
        type: Date,
        required: [true, "Please provide a date of birth"],
    },
    zipcode: {
        type: String,
        required: [true, "Please provide a zipcode"],
    },
});
const TutorModel = mongoose_1.default.model("Tutor", TutorSchema);
exports.default = TutorModel;
