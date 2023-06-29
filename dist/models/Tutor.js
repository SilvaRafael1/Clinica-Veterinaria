"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TutorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlenght: 3,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
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
        unique: [true, "E-mail already exists"],
    },
    date_of_birth: {
        type: Date,
        required: [true, "Please provide a date of birth"],
    },
    zipcode: {
        type: String,
        required: [true, "Please provide a zipcode"],
    },
    // pets: [Schema.Types.ObjectId]
    pets: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Pet'
        }
    ]
});
TutorSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return;
        const salt = yield bcrypt.genSalt(10);
        this.password = yield bcrypt.hash(this.password, salt);
    });
});
TutorSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });
};
TutorSchema.methods.checkPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield bcrypt.compare(password, this.hashedPassword);
        return result;
    });
};
const TutorModel = mongoose_1.default.model("Tutor", TutorSchema);
exports.default = TutorModel;
