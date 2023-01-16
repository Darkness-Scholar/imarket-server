import User from "../../models/user.model"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

function tokenCreator (email:string) {
    return jwt.sign({ email }, 'EXAMPLE_SECRET_KEY')
}

interface iSignup {
    name: string,
    email: string,
    password: string,
    role?: 'distributor' | 'seller'
}

class UserController {
    static signup = async (req: Request, res: Response) => {

        try {
            let { name, email, password, role }:iSignup = req.body
            if (!name || !email || !password) return res.status(400).json({ message: "Name, email, password are required" })
            let newUser = await User.create({
                name, password, email, ...(!!role && { role: role?.trim() }),
            })
            if (!newUser) {
                return res.status(400).json({ message: "This user is existed" })
            } else {
                let token = tokenCreator(email)
                return res.status(200).json({ message: "Success created", token, role: newUser.role })
            }

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Error created" })
        }
    }
    static signin = async (req: Request, res: Response) => {
        try {
            let { email, password } = req.body
            if (!email || !password) return res.status(400).json({ message: "Email, password are required" })
            let user = await User.findOne({ where: { email, password }})
            if (user) {
                return res.status(200).json({ token :tokenCreator(email), role: user.role })
            } else return res.status(404).json({ message: "User is not found" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Error created" })
        }
    }
}

export default UserController