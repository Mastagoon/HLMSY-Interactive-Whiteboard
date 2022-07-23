import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useCanvasContext } from "../context/canvasContext"

const Home: NextPage = () => {
  const [roomId, setRoomId] = useState<string>("")
  const { nickName, changeNickName } = useCanvasContext()

  const router = useRouter()

  const handleJoin = () => {
    if (!roomId) return
    saveNickName()
    router.push("/[id]", `/${roomId}`)
  }

  const saveNickName = () => {
    if (typeof window === "undefined") return
    console.log("SAVING NICKNAME")
    localStorage.setItem(
      "nickname",
      nickName ?? "Guest " + Math.floor(Math.random() * 1000)
    )
  }

  const handleNew = () => {
    // generate a random string
    const id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    saveNickName()
    router.push("/[id]", `/${id}`)
  }

  return (
    <>
      <div className="bg-gray-500 w-full h-full justify-center items-center flex flex-col">
        <label>Nickname</label>
        <input
          type="text"
          value={nickName}
          onChange={(e) => changeNickName(e.target.value)}
        />
        <div className="py-3"></div>
        <label>Room ID</label>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <div className="py-3"></div>
        <button
          className="px-3 py-2 border border-white text-white"
          onClick={handleJoin}
        >
          Join Room
        </button>
        <div className="py-3"></div>
        <button
          className="border px-3 py-2 text-white border-white"
          onClick={handleNew}
        >
          New Room
        </button>
      </div>
    </>
  )
}

export default Home
