"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCodes = require("http-status-code");
const Auth = (req, res) => {
    res.status(200).json({ msg: "Auth" });
};
module.exports = {
    Auth,
};
