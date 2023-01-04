import express, { Request, Response, Router } from "express"
import AuthController from "../controllers/auth.controller"

const Auth:Router = express.Router()

Auth.post("/signup", AuthController.signup)
Auth.post("/signin", AuthController.signin)

export default Auth