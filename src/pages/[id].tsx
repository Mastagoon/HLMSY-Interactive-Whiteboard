import { useRouter } from "next/router"
import { useEffect } from "react"
import Canvas from "../components/Canvas"
import Sidebar from "../components/Sidebar"
import { useCanvasContext } from "../context/canvasContext"

const DrawingRoom = () => {
  const router = useRouter()
  const { id } = router.query

  const { changeRoomId } = useCanvasContext()

  useEffect(() => {
    // if (!id) router.push("/")
    if (typeof id === "string") changeRoomId(id)
  }, [id])

  return id?.toString() ? (
    <div className="h-full grid grid-cols-12 w-full">
      <div className="col-span-2 hidden md:block">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-10">
        <Canvas roomId={id?.toString()} />
      </div>
    </div>
  ) : (
    <h1>loading...</h1>
  )
}

export default DrawingRoom
