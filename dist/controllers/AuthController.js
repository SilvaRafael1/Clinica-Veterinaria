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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = require("bcryptjs");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(400).json("All input is required");
        }
        const tutor = yield Tutor_1.default.findOne({ email });
        if (!tutor) {
            return res.status(401).json("Invalid Credential");
        }
        const comparePassword = yield bcrypt.compare(password, tutor === null || tutor === void 0 ? void 0 : tutor.password);
        if (!comparePassword) {
            return res.status(401).json("Invalid Credential");
        }
        const token = jsonwebtoken_1.default.sign({ user_id: tutor === null || tutor === void 0 ? void 0 : tutor._id, email }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });
        res.status(200).json({ access_token: token });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
module.exports = {
    Auth,
};
