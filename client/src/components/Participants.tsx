import { useEffect } from "react"
import { useCanvasContext } from "../context/canvasContext"

const Participants: React.FC = () => {
  const { participants, changeParticipants, nickName } = useCanvasContext()

  // useEffect(() => {
  // if (!participants.includes(nickName)) {
  // console.log("HERE")
  // changeParticipants([...participants, nickName])
  // }
  // }, [nickName, participants])

  console.log(participants)

  return (
    <div className="flex h-60 overflow-y-auto overflow-x-clip flex-col my-3 text-white border-2">
      <div className="font-bold mx-2 my-2 text-center">Participants</div>
      {participants.map((participant, index) => (
        <div key={index} className="mx-2 my-2">
          {participant}
        </div>
      ))}
    </div>
  )
}

export default Participants
