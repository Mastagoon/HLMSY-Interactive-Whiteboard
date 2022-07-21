import { BaseSyntheticEvent, useEffect, useRef, useState } from "react"
import { CanvasContextType, useCanvasContext } from "../context/canvasContext"

const Canvas: React.FC = () => {
  var prevX: number, prevY: number, currX: number, currY: number

  const {
    color,
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
  // const

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

  const handleMouseDown = (e: BaseSyntheticEvent) => {
    if (!ctxRef.current) return
    // const nativeEvent: any = e.nativeEvent
    ctxRef.current.beginPath()
    // ctxRef.current.moveTo(nativeEvent.offsetX, nativeEvent.offsetY)
    setIsDrawing(true)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
    ctxRef.current?.closePath()
  }

  const handleMouseMove = ({ nativeEvent }: any) => {
    if (!isDrawing || !ctxRef.current) return
    // ctxRef.current.beginPath()
    prevX = currX
    prevY = currY
    currX = nativeEvent.offsetX
    currY = nativeEvent.offsetY
    ctxRef.current.moveTo(prevX, prevY)
    ctxRef.current.lineTo(currX, currY)
    ctxRef.current.stroke()
  }

  const handleOnWheel = (e: BaseSyntheticEvent) => {
    const { wheelDelta } = e.nativeEvent as any
    const newBrushSize = wheelDelta >= 0 ? brushSize + 3 : brushSize - 3
    changeBrushSize(newBrushSize)
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
