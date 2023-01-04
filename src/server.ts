// Run application >>> yarn dev:server
import express, { Request, Response } from "express"
import http from "http"
import { Server } from "socket.io"
import { createClient } from "redis"
import cors from "cors"
import bodyParser from "body-parser"
import database from "./database"
import Auth from "./routes/auth.router"
import Middleware from "./services/middleware.service"
import { UserDTO } from "./dtos"
import Product from "./routes/product.router"

declare global {
    namespace Express {
      interface Request {
        user: UserDTO,
    }
  }
}

const app = express()
const server = http.createServer(app)

const redisClient = createClient()
redisClient.on('error', (err) => console.log('Redis Client Error', err))
redisClient.connect().then()

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send("HELLO WORLD")
})

app.use("/auth", Auth)
app.use("/product", Middleware, Product)

interface iPayloadData {
  msg: string
}

io.on("connection", socket => {

  console.log(`Connection ${socket.id} has just connected`)

  socket.on("A", (data:iPayloadData) => {
    console.log(data)
    socket.emit("B", { msg: "Hello" })
  })

  socket.on("disconnect", () => {
    console.log(`Connection ${socket.id} has just disconnected`)
  })
})

server.listen(8888, () => console.log(`Server is running on port 1999`))