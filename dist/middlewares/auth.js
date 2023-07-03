"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    const headerToken = req.headers['token'];
    if (!headerToken) {
        return res.status(403).json("A token is required for authentication");
    }
    const token = headerToken.toString();
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    }
    catch (error) {
        return res.status(401).json("Invalid token, try again with another one.");
    }
    return next();
};
exports.authMiddleware = authMiddleware;
