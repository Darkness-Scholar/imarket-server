import { Request, Response, NextFunction } from "express";
import database from "../database";
import jwt from "jsonwebtoken"
import { UserDTO } from "../dtos";

export default function Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        let accesstoken: any = req.headers['accesstoken'] || req.body.accesstoken
        console.log(accesstoken)
        let decoded:any = jwt.verify(accesstoken, "ACCESS_TOKEN_SECRET")
        database.execute(`SELECT * FROM royalplaza.users WHERE user_email="${decoded.user}"`, (error, result: any) => {
            if (error) return res.status(500).json("Error")
            let { user_id, user_email, user_role }: UserDTO = result[0]
            req.user = { user_email, user_id, user_role }
            return next()
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json("Unauthenticated")
    }
}