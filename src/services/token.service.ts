import jwt from "jsonwebtoken"

interface Payload {
    userInfo: string
}

export const tokenCreator = ({ userInfo }:Payload) => {
    return jwt.sign({ user:userInfo }, "ACCESS_TOKEN_SECRET")
}