import { Server } from "socket.io"
import { createServer } from "http"
import express from "express"
import dotenv from "dotenv"
import path from "path"
dotenv.config({ path: path.join(__dirname, "..", ".env") })

const main = async () => {
  const app = express()
  // app.use(cors())
  const httpServer = createServer(app)
  const io = new Server(httpServer, { cors: { origin: "*" } })
  httpServer.listen(process.env.PORT || 8080, () =>
    console.log("Server started on " + process.env.PORT)
  )
  io.on("connection", (client) => {
    console.log("New connection " + client.id)

    // join room request
    client.on("join", (roomId: string) => {
      client.join(roomId)
      console.log(`Client ${client.id} joined room ${roomId}`)
    })

    client.on("disconnect", () => {
      console.log(`Client ${client.id} disconnected`)
    })

    client.on("draw", (data) => {
      // client..emit("draw", data)
      console.log(client.id)
      console.log(data)
      client.broadcast.to(data.roomId).emit("draw", data)
    })

    client.on("clear", (data) => {
      client.broadcast.to(data.roomId).emit("clear", data)
    })

    client.on("brush_size_change", (data) => {
      client.broadcast.to(data.roomId).emit("brush_size_change", data)
    })
  })
}

main()
