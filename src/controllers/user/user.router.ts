import express from "express"
import UserController from "./user.controller"

let user = express.Router()

user.post("/signup", UserController.signup)
user.post("/signin", UserController.signin)

export default user