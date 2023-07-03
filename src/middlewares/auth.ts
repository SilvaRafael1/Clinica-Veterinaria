import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from 'jsonwebtoken'

import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const headerToken = req.headers['token'];
    if (!headerToken) {
        return res.status(403).json("A token is required for authentication");
    }
    const token = headerToken.toString()

    try {
        jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json("Invalid token, try again with another one.")
    }

    return next()
}
