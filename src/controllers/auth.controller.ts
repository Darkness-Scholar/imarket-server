import { Request, Response } from "express"
import database from "../database"
import jwt from "jsonwebtoken"

function errorCreator (code:number, msg:string) {
    return JSON.stringify({ code, msg })
}

interface iUser {
    email: string,
    password: string
}

export default class AuthController {
    static signup = (req: Request, res: Response) => {
        try {
            let { email, password } : iUser = req.body
            if (!email || !password) throw new Error (errorCreator(400, "Email, Password are required"))
            database.execute(`INSERT INTO royalplaza.users (user_email, user_password)
            VALUES ("${email}", "${password}")`, (error, result) => {
                let token = jwt.sign({user:email}, "ACCESS_TOKEN_SECRET")
                if (error) {
                    return res.status(500).json({ msg:"Can not create user", data: null })
                } else return res.status(200).json({ 
                    msg:"Success create user", 
                    data: token })
            })
        } catch (error:any) {
            console.log(error.message)
            res.status(500).json({ msg: "Error", data:null })
        }
    }
    static signin = (req: Request, res: Response) => {
        try {
            let { email, password } : iUser = req.body
            if (!email || !password) return res.status(400).json({ msg: "Email and Password are required" })
            database.execute(`SELECT * FROM royalplaza.users WHERE user_email = "${email}"`, (error, result:any) => {
                if (error) return res.status(500).json({ msg: "Server error" })
                if (result.length == 0) return res.status(404).json({ msg: "User data is not found" })
                if (result[0].user_password !== password) return res.status(400).json({ msg: "Wrong password" })

                let token = jwt.sign({user:result[0].user_email}, "ACCESS_TOKEN_SECRET")
                
                return res.status(200).json({ 
                    msg: "Success", 
                    data: token
                })
            })
        } catch (error) {
            res.status(500).json({ msg: "Error", data:null })
        }
    }
}