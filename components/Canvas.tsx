import { BaseSyntheticEvent, useEffect, useRef, useState } from "react"
import { CanvasContextType, useCanvasContext } from "../context/canvasContext"

const Canvas: React.FC = () => {
  const { color, isEraser, bgColor } = useCanvasContext() as CanvasContextType

  const canvasRef = useRef(null)
  const ctxRef = useRef<CanvasRenderingContext2D>()
  const [isDrawing, setIsDrawing] = useState(false)
  // const

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!
    if (!canvas) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.scale(1, 1)
    ctx.lineCap = "round"
    ctx.lineWidth = 5
    ctx.strokeStyle = "#000"
    ctxRef.current = ctx
  }, [])

  useEffect(() => {
    const ctx = ctxRef.current
    if (!ctx) return
    ctx.strokeStyle = color
    ctxRef.current = ctx
  }, [color])

  const startDrawing = (e: BaseSyntheticEvent) => {
    const nativeEvent: any = e.nativeEvent
    ctxRef.current?.beginPath()
    ctxRef.current?.moveTo(nativeEvent.offsetX, nativeEvent.offsetY)
    setIsDrawing(true)
  }

  const stopDrawing = () => {
    ctxRef.current?.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: any) => {
    if (!isDrawing) return
    ctxRef.current?.lineTo(nativeEvent.offsetX, nativeEvent.offsetY)
    ctxRef.current?.stroke()
  }

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      className="w-full h-full "
      style={{ backgroundColor: bgColor }}
    ></canvas>
  )
}

export default Canvas
