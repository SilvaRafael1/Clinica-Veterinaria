"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TutorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name"],
        minlenght: 3,
    },
    phone: {
        type: String,
        require: [true, "Please provide a name"],
        minlenght: 3,
    },
    email: {
        type: String,
        unique: true,
        require: [true, "Please provide a email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    date_of_birth: {
        type: Date,
        require: [true, "Please provide a date of birth"],
    },
    zipcode: {
        type: String,
        require: [true, "Please provide a zipcode"],
    },
});
module.exports = mongoose_1.default.model("Tutor", TutorSchema);
