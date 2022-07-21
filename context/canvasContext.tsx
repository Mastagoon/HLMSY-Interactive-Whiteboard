import React, { useContext } from "react"
import { useState } from "react"

export interface CanvasContextType {
  isEraser: boolean
  color: string
  toggleEraser: () => void
  changeColor: (color: string) => void
  bgColor: string
  changeBgColor: (color: string) => void
  brushSize: number
  changeBrushSize: (size: number) => void
  clearCanvas: boolean
  changeClearCanvas: (b: boolean) => void
}

const CanvasContext = React.createContext<CanvasContextType | null>(null)

interface CanvasProviderProps {
  children: React.ReactNode
}

export const useCanvasContext = () => {
  const context = useContext(CanvasContext)
  if (context === null) {
    throw new Error("useCanvasContext must be used within a CanvasProvider")
  }
  return context
}

export const CanvasProvider: React.FC<CanvasProviderProps> = ({ children }) => {
  const [isEraser, setIsEraser] = useState(false)
  const [bgColor, setBgColor] = useState<string>("#000")
  // #TODO color type?
  const [color, setColor] = useState<string>("#fff")
  const [brushSize, setBrushSize] = useState<number>(3)
  const [clearCanvas, setClearCanvas] = useState<boolean>(false)

  const changeColor = (c: string) => setColor(c)

  const toggleEraser = () => setIsEraser(!isEraser)

  const changeClearCanvas = (b: boolean) => setClearCanvas(b)

  const changeBgColor = (c: string) => setBgColor(c)

  const changeBrushSize = (size: number) => setBrushSize(size)

  return (
    <CanvasContext.Provider
      value={{
        isEraser,
        color,
        toggleEraser,
        changeColor,
        bgColor,
        changeBgColor,
        brushSize,
        changeBrushSize,
        changeClearCanvas,
        clearCanvas,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}
