import React, { useContext, useEffect } from "react"
import { useState } from "react"

export interface CanvasContextType {
  roomId: string
  changeRoomId: (id: string) => void
  isEraser: boolean
  color: string
  setEraser: (b: boolean) => void
  changeColor: (color: string) => void
  bgColor: string
  changeBgColor: (color: string) => void
  brushSize: number
  changeBrushSize: (size: number) => void
  clearCanvas: boolean
  changeClearCanvas: (b: boolean) => void
  nickName: string
  changeNickName: (nickName: string) => void
  participants: string[]
  changeParticipants: (participants: string[]) => void
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
  const [roomId, setRoomId] = useState<string>("")
  const [nickName, setNickname] = useState<string>("")
  const [participants, setParticipants] = useState<string[]>([])

  useEffect(() => {
    if (typeof window !== "undefined")
      setNickname(localStorage.getItem("nickname") || "")
  }, [])

  const changeColor = (c: string) => setColor(c)

  const setEraser = (b: boolean) => setIsEraser(b)

  const changeClearCanvas = (b: boolean) => setClearCanvas(b)

  const changeBgColor = (c: string) => setBgColor(c)

  const changeRoomId = (id: string) => setRoomId(id)

  const changeBrushSize = (size: number) => setBrushSize(size)

  const changeNickName = (nickName: string) => setNickname(nickName)

  const changeParticipants = (participants: string[]) =>
    setParticipants(participants)

  return (
    <CanvasContext.Provider
      value={{
        isEraser,
        color,
        setEraser,
        changeColor,
        bgColor,
        changeBgColor,
        brushSize,
        changeBrushSize,
        changeClearCanvas,
        clearCanvas,
        roomId,
        changeRoomId,
        nickName,
        changeNickName,
        participants,
        changeParticipants,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}
