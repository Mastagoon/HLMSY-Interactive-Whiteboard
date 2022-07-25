import React, { useEffect } from "react"
import { useCanvasContext } from "../context/canvasContext"

const Slider: React.FC = () => {
  const { changeBrushSize, brushSize } = useCanvasContext()

  return (
    <>
      <label htmlFor="brushsize" className="text-white text-center text-xl">
        Brush Size
      </label>
      <input
        onChange={(e) => changeBrushSize(Number(e.target.value))}
        value={brushSize}
        min={0}
        step={3}
        max={100}
        type="range"
      />
    </>
  )
}

export default Slider
