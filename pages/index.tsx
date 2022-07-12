import type { NextPage } from "next"
import Canvas from "../components/Canvas"
import Sidebar from "../components/Sidebar"

const Home: NextPage = () => {
  return (
    <div className="h-full grid grid-cols-12 w-full">
      <div className="bg-red-500 col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Canvas />
      </div>
    </div>
  )
}

export default Home
