import type { NextPage } from "next"
import Canvas from "../components/Canvas"
import Sidebar from "../components/Sidebar"
import { CanvasProvider } from "../context/canvasContext"

const Home: NextPage = () => {
  return (
    <CanvasProvider>
      <div className="h-full grid grid-cols-12 w-full">
        <div className="col-span-2 hidden md:block">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-10">
          <Canvas />
        </div>
      </div>
    </CanvasProvider>
  )
}

export default Home
