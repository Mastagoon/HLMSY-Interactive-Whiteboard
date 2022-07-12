import { BaseSyntheticEvent, useEffect, useRef, useState } from "react"

const Canvas: React.FC = () => {
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
    ctx.strokeStyle = "black"
    ctxRef.current = ctx
    console.log("DOONE?")
  }, [])

  const startDrawing = (e: BaseSyntheticEvent) => {
    const nativeEvent: any = e.nativeEvent
    console.log(nativeEvent)
    console.log("BEGIN PATH")
    console.log(nativeEvent)
    ctxRef.current?.beginPath()
    ctxRef.current?.moveTo(nativeEvent.offsetX, nativeEvent.offsetY)
    setIsDrawing(true)
  }

  const stopDrawing = () => {
    console.log("FINISH PATh")
    ctxRef.current?.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: any) => {
    if (!isDrawing) return
    console.log(nativeEvent)
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
    ></canvas>
  )
}

export default Canvas
