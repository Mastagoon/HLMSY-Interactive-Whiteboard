import { Server, Socket } from "socket.io"
import { createServer } from "http"
import express from "express"
import dotenv from "dotenv"
import path from "path"
import { DefaultEventsMap } from "socket.io/dist/typed-events"
dotenv.config({ path: path.join(__dirname, "..", ".env") })

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
  const io = new Server(httpServer, { cors: { origin: "*" } })
  httpServer.listen(process.env.PORT || 8080, () =>
    console.log("Server started on " + process.env.PORT)
  )
  io.on("connection", (client: Socket<DefaultEventsMap>) => {
    console.log("New connection " + client.id)

    // join room request
    client.on("join", (data: { roomId: string; nick: string }) => {
      let room = rooms.find((r) => r.roomId === data.roomId)
      console.log("ROOM " + room)
      console.log(room?.participants)
      if (room?.participants.filter((p) => p.id === client.id).length) return // already in the room
      console.log(room)
      if (!room) {
        room = { roomId: data.roomId, participants: [] }
        rooms.push(room)
      }
      if (!data.nick?.length)
        data.nick = "Guest " + Math.floor(Math.random() * 1000)

      room.participants.push({
        id: client.id,
        nick: data.nick,
      })
      client.join(data.roomId)
      // get all users in room
      console.log(room.participants)
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
