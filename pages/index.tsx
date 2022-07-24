import { faCoffee, faKeyboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import Swal from "sweetalert2"
import Whiteboard from "../components/svg/Whiteboard"
import { useCanvasContext } from "../context/canvasContext"

const Home: NextPage = () => {
  const [roomId, setRoomId] = useState<string>("")
  const { nickName, changeNickName } = useCanvasContext()

  const router = useRouter()

  const handleJoin = async () => {
    if (!roomId) return
    await saveNickName()
    router.push("/[id]", `/${roomId}`)
  }

  const saveNickName = async () => {
    if (typeof window === "undefined") return
    if (nickName) return
    const { value } = await Swal.fire({
      title: "Enter your name",
      text: "This will be used to identify you in the session",
      input: "text",
    })
    changeNickName(value)
    localStorage.setItem(
      "nickname",
      nickName ?? "Guest " + Math.floor(Math.random() * 1000)
    )
  }

  const handleNew = async () => {
    // generate a random string
    const id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    await saveNickName()
    router.push("/[id]", `/${id}`)
  }

  return (
    <>
      <div className="bg-center bg-contain bg-[#f1f1f1] bg-no-repeat h-full px-20 py-3 grid grid-cols-12">
        <div className="col-span-12">
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <img src="/assets/Logo.svg" />
            </div>
            <div className="">
              <div className="opacity-60 text-xl">
                {new Date().toDateString()}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 text-center opacity-60 leading-10">
          <h1 className="text-5xl capitalize">Here, let me show you</h1>
          <p>A simple whiteboard to express and share your ideas.</p>
        </div>
        <div className="col-span-12 flex justify-center ">
          <Whiteboard />
        </div>
        <div className="col-span-12">
          <div className="flex flex-col justify-center gap-5 items-center mt-10">
            <button
              onClick={handleNew}
              className="bg-native-blue text-white px-5 py-2 rounded-sm transition-all hover:opacity-70 duration-200 shadow-md"
            >
              New Session
            </button>
            <hr className="w-1/2 bg-black opacity-30" />
            <div className="flex flex-row gap-1">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FontAwesomeIcon className="opacity-60" icon={faKeyboard} />
                </span>
                <input
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="bg-white border-2 border-gray-500 px-8 py-2 rounded-sm shadow-md transition-all duration-200 outline-blue-500"
                  placeholder="Session code or link"
                />
              </div>
              <button
                disabled={!roomId}
                onClick={handleJoin}
                className={`bg-gray-500 text-white px-5 py-2 rounded-sm shadow-md disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-70 transition-all duration-200 
                `}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
