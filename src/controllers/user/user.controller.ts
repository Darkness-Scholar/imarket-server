import User from "../../models/user.model"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

class UserController {
    static signup = async (req: Request, res: Response) => {
        try {
            let { name, email, password } = req.body
            if (!name || !email || !password) return res.status(400).json({ message: "Name, email, password are required" })
            let newUser = await User.create({
                name, password, email
            })

            if (!newUser) {
                return res.status(400).json({ message: "This user is existed" })
            } else return res.status(200).json({ message: "Success created" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Error created" })
        }
    }
    static signin = async (req: Request, res: Response) => {
        try {
            let { email, password } = req.body
            if (!email || !password) return res.status(400).json({ message: "Email, password are required" })
            // let user = await User.findOne({ email, password })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Error created" })
        }
    }
}

export default UserController