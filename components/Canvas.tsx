import { BaseSyntheticEvent, useEffect, useRef, useState } from "react"
import { CanvasContextType, useCanvasContext } from "../context/canvasContext"
import { io, Socket } from "socket.io-client"

let socket: Socket

const Canvas: React.FC = () => {
  var prevX: number, prevY: number, currX: number, currY: number

  const {
    color,
    changeColor,
    isEraser,
    bgColor,
    brushSize,
    changeBrushSize,
    changeClearCanvas,
    clearCanvas,
  } = useCanvasContext() as CanvasContextType

  const canvasRef = useRef<HTMLCanvasElement>()
  const ctxRef = useRef<CanvasRenderingContext2D>()
  const [isDrawing, setIsDrawing] = useState(false)
  const [connected, setConnected] = useState(false)

  const socketInitializer = async () => {
    if (connected) return
    // await fetch("/api/socketio")
    socket = io("http://localhost:8000")

    socket.on("connect", () => {
      console.log("connected")
      setConnected(true)
    })

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

    socket.on("color_change", (data: { color: string }) =>
      changeColor(data.color)
    )
  }

  // connection
  useEffect(() => {
    if (!connected) socketInitializer()
  }, [connected])

  useEffect(() => {
    if (clearCanvas && ctxRef.current && canvasRef.current) {
      ctxRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      )
      changeClearCanvas(false)
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

  const handleMouseDown = ({ nativeEvent }: any) => {
    console.log(nativeEvent.offsetX, nativeEvent.offsetY)
    setIsDrawing(true)
    startDrawing(nativeEvent.offsetX, nativeEvent.offsetY)
    socket.emit("draw", {
      x: nativeEvent.offsetX,
      y: nativeEvent.offsetY,
      type: "start",
    })
  }

  const handleMouseUp = ({ nativeEvent }: any) => {
    setIsDrawing(false)
    stopDrawing()
    socket.emit("draw", { x: 0, y: 0, type: "end" })
  }

  const handleMouseMove = ({ nativeEvent }: any) => {
    if (!isDrawing) return
    drawing(nativeEvent.offsetX, nativeEvent.offsetY)
    socket.emit("draw", {
      x: nativeEvent.offsetX,
      y: nativeEvent.offsetY,
      type: "move",
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
    changeBrushSize(newBrushSize)
  }

  const startDrawing = (x: number, y: number) => {
    if (!ctxRef.current) return
    currX = x
    currY = y
    ctxRef.current.beginPath()
    setIsDrawing(true)
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
    setIsDrawing(false)
    ctxRef.current.closePath()
  }

  return (
    <canvas
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleOnWheel}
      //@ts-ignore
      ref={canvasRef}
      className="w-full h-full "
      style={{ backgroundColor: bgColor }}
    ></canvas>
  )
}

export default Canvas
