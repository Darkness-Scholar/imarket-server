import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import User from "../models/user.model"

async function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        const [_, token] = req.headers.authorization.split(" ")
        if (token) {
            const payload:any = jwt.verify(token, "EXAMPLE_SECRET_KEY", { complete: false })
            let user = User.findByPk(payload.id)
            if (!user) return res.status(401).json({message: "Unauthorized"})
            req.user = user
            return next()
        } else return res.status(401).json({message: "Unauthorized"})
    } else return res.status(401).json({message: "Unauthorized"})
}

export default isAuthenticated