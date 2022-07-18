import React, { useContext } from "react"
import { useState } from "react"

export interface CanvasContextType {
  isEraser: boolean
  color: string
  toggleEraser: () => void
  changeColor: (color: string) => void
  bgColor: string
  changeBgColor: (color: string) => void
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

  const changeColor = (c: string) => setColor(c)

  const toggleEraser = () => setIsEraser(!isEraser)

  const changeBgColor = (c: string) => setBgColor(c)

  return (
    <CanvasContext.Provider
      value={{
        isEraser,
        color,
        toggleEraser,
        changeColor,
        bgColor,
        changeBgColor,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}
