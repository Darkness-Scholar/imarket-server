// Run application >>> yarn dev:server
import express, { Request, Response } from "express"
import http from "http"
import { Server } from "socket.io"
import { createClient } from "redis"
import cors from "cors"
import bodyParser from "body-parser"
import { Sequelize } from "sequelize"
import user from "./controllers/user/user.router"
import search from "./controllers/search/search.router"

declare global {
  var __database__:any
}

declare global {
  namespace Express {
    interface Request {
      user: any,
  }
}
}

global.__database__ = new Sequelize("idata", "root", "Tungl@ne69", {
  host: "127.0.0.1",
  dialect: "mysql"
})

const app = express()
const server = http.createServer(app)

// const redisClient = createClient()
// redisClient.on('error', (err) => console.log('Redis Client Error', err))
// redisClient.connect().then()

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
// app.use((req, res, next) => ResponseHandler(next))
// 
// app.use(async (ctx:any, next:any) => {
//   try {
//     await next()
//     const status = ctx.status || 404
//     if (status === 404) {
//       return ctx.res.notFound();
//     }
//   } catch (error:any) {
//     console.log(error)
//     return ctx.res.internalServerError({ message: error.message })
//   }
// })

app.get('/', async (req: Request, res: Response) => {

    res.send("SUCCESS")
})

app.use("/user", user)
app.use("/search", search)

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

server.listen(8888, () => console.log(`Server is running on port 8888`))