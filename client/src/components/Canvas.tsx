import { BaseSyntheticEvent, useEffect, useRef, useState } from "react"
import { CanvasContextType, useCanvasContext } from "../context/canvasContext"
import { io, Socket } from "socket.io-client"

let socket: Socket

interface CanvasProps {
  roomId: string
}

const Canvas: React.FC<CanvasProps> = ({ roomId }) => {
  let currX: number, currY: number

  const {
    color,
    changeColor,
    isEraser,
    bgColor,
    brushSize,
    changeBrushSize,
    changeClearCanvas,
    clearCanvas,
    changeParticipants,
    nickName,
    // roomId,
  } = useCanvasContext() as CanvasContextType

  const canvasRef = useRef<HTMLCanvasElement>()
  const ctxRef = useRef<CanvasRenderingContext2D>()
  const [isDrawing, setIsDrawing] = useState(false)
  const [connected, setConnected] = useState(false)

  const socketInitializer = async () => {
    if (connected) return
    // await fetch("/api/socketio")
    socket = io(process.env.NEXT_PUBLIC_SERVER_HOST ?? "http://localhost:8000")

    socket.on("connect", () => {
      console.log("connected")
      socket.emit("join", { roomId, nick: nickName })
      setConnected(true)
    })

    socket.on("participants_update", (participants) => {
      console.log("participants_update", participants)
      changeParticipants(participants)
    })

    socket.on("disconnect", () => setConnected(false))

    socket.on("draw", (data: { x: number; y: number; type: string }) => {
      if (!ctxRef.current) return
      console.log(data.type)
      switch (data.type) {
        case "start":
          startDrawing(data.x, data.y)
          break
        case "move":
          drawing(data.x, data.y)
          break
        case "end":
          stopDrawing()
          break
      }
    })

    socket.on("clear", () => clear())

    socket.on("color_change", (data: { color: string }) =>
      changeColor(data.color)
    )

    socket.on("brush_size_change", (data: { brushSize: number }) =>
      updateBrushSize(data.brushSize)
    )
  }

  // connection
  useEffect(() => {
    if (!connected) socketInitializer()
  }, [connected])

  useEffect(() => {
    if (clearCanvas && ctxRef.current && canvasRef.current) {
      socket.emit("clear", { roomId })
      clear()
    }
  }, [clearCanvas, changeClearCanvas])

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!
    if (!canvas) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.scale(1, 1)
    ctx.lineCap = "round"
    ctx.strokeStyle = "#000"
    ctxRef.current = ctx
  }, [])

  useEffect(() => {
    const ctx = ctxRef.current
    if (!ctx) return
    ctx.strokeStyle = isEraser ? bgColor : color
    ctxRef.current = ctx
    ctx.lineWidth = brushSize
  }, [color, isEraser, bgColor, brushSize])

  const clear = () => {
    if (!ctxRef.current || !canvasRef.current) return
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )
    changeClearCanvas(false)
  }

  const handleMouseDown = ({ nativeEvent }: any) => {
    console.log(nativeEvent.offsetX, nativeEvent.offsetY)
    setIsDrawing(true)
    startDrawing(nativeEvent.offsetX, nativeEvent.offsetY)
    socket.emit("draw", {
      x: nativeEvent.offsetX,
      y: nativeEvent.offsetY,
      type: "start",
      roomId,
    })
  }

  const handleMouseUp = ({ nativeEvent }: any) => {
    setIsDrawing(false)
    stopDrawing()
    socket.emit("draw", { x: 0, y: 0, type: "end", roomId })
    // socket.emit("canvas", canvasRef.current?.toDataURL())
  }

  const handleMouseMove = ({ nativeEvent }: any) => {
    if (!isDrawing) return
    drawing(nativeEvent.offsetX, nativeEvent.offsetY)
    socket.emit("draw", {
      x: nativeEvent.offsetX,
      y: nativeEvent.offsetY,
      type: "move",
      roomId,
    })
    //
    // if (!isDrawing || !ctxRef.current) return
    // prevX = currX
    // prevY = currY
    // currX = nativeEvent.offsetX
    // currY = nativeEvent.offsetY
    // ctxRef.current.moveTo(prevX, prevY)
    // ctxRef.current.lineTo(currX, currY)
    // ctxRef.current.stroke()
  }

  const handleOnWheel = (e: BaseSyntheticEvent) => {
    const { wheelDelta } = e.nativeEvent as any
    const newBrushSize = wheelDelta >= 0 ? brushSize + 3 : brushSize - 3
    updateBrushSize(newBrushSize)
    socket.emit("brush_size_change", { brushSize: newBrushSize, roomId })
  }

  const startDrawing = (x: number, y: number) => {
    if (!ctxRef.current) return
    currX = x
    currY = y
    ctxRef.current.beginPath()
  }

  const drawing = (x: number, y: number) => {
    if (!ctxRef.current || !canvasRef.current) return
    // canvasRef.current.width = canvasRef.current.offsetWidth
    // canvasRef.current.height = canvasRef.current.offsetHeight
    ctxRef.current.moveTo(currX, currY)
    ctxRef.current.lineTo(x, y)
    currX = x
    currY = y
    ctxRef.current.stroke()
  }

  const stopDrawing = () => {
    if (!ctxRef.current) return
    ctxRef.current.closePath()
  }

  const updateBrushSize = (newSize: number) => {
    changeBrushSize(newSize)
  }

  return (
    <canvas
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleOnWheel}
      //@ts-ignore
      ref={canvasRef}
      // #TODO if disconnected gray backdrop
      className={"w-full h-full "}
      style={{ backgroundColor: bgColor }}
    ></canvas>
  )
}

export default Canvas
