import { Server, Socket } from "socket.io"
import { createServer } from "http"
import https from "https"
import express from "express"
import dotenv from "dotenv"
import path from "path"
import { DefaultEventsMap } from "socket.io/dist/typed-events"
import fs from "fs"
dotenv.config({ path: path.join(__dirname, "..", ".env") })

const privateKey = fs.readFileSync(
  path.join(__dirname, "..", "sslcert/key.pem"),
  "utf8"
)
const cert = fs.readFileSync(
  path.join(__dirname, "..", "sslcert/cert.pem"),
  "utf8"
)

const httpsCreds = { key: privateKey, cert, passphrase: process.env.SSL_PASS }

interface User {
  id: string
  nick: string
}

interface Room {
  roomId: string
  participants: User[]
}

const rooms: Room[] = []

const main = async () => {
  const app = express()
  const httpServer = createServer(app)
  const httpsServer = https.createServer(httpsCreds, app)
  let io: Server, port: number
  if (process.env.ENV === "production") {
    // #TODO change cors
    port = Number(process.env.PORT) ?? 443
    io = new Server(httpsServer, { cors: { origin: "*" } })
    httpsServer.listen(port, () =>
      console.log(`HTTPS server startedd on ${port}`)
    )
  } else {
    port = Number(process.env.PORT) ?? 8000
    io = new Server(httpServer, { cors: { origin: "*" } })
    httpServer.listen(port, () => console.log(`Server started on ${port}`))
  }

  io.on("connection", (client: Socket<DefaultEventsMap>) => {
    console.log("New connection " + client.id)

    // join room request
    client.on("join", (data: { roomId: string; nick: string }) => {
      // find the room sent by client
      let room = rooms.find((r) => r.roomId === data.roomId)
      if (room?.participants.filter((p) => p.id === client.id).length) return // already in the room
      // new connection
      if (!room) {
        room = { roomId: data.roomId, participants: [] }
        rooms.push(room)
      }
      // set nickname or random guest name
      if (!data.nick?.length)
        data.nick = "Guest " + Math.floor(Math.random() * 1000)

      room.participants.push({
        id: client.id,
        nick: data.nick,
      })
      client.join(data.roomId)
      // get all users in room
      io.to(data.roomId).emit(
        "participants_update",
        room.participants.map((p) => p.nick)
      )
      console.log(`Client ${client.id} joined room ${data.roomId}`)
    })

    client.on("disconnecting", () => {
      client.rooms.forEach((r) => {
        console.log(`Client ${client.id} leaving room ${r}`)
        const room = rooms.find((room) => room.roomId === r)
        if (room) {
          room.participants = room.participants.filter(
            (u) => u.id !== client.id
          )
          io.to(room.roomId).emit(
            "participants_update",
            room.participants.map((u) => u.nick)
          )
        }
      })
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
