import ColorPallete from "./ColorPallete"
import Participants from "./Participants"
import Tools from "./Tools"

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block bg-gray-600 py-3 px-5 h-full">
      <Participants />
      <Tools />
      <ColorPallete />
      <div className="flex flex-col lg:flex-row gap-2 justify-around text-white">
        <button className="bg-red-600 px-5 py-2 rounded-md shadow-md hover:shadow-none duration-300 transition-all ease-in-out hover:opacity-80">
          Clear
        </button>
        <button className="bg-gray-700 px-5 py-2 rounded-md shadow-md hover:shadow-none duration-300 transition-all ease-in-out hover:opacity-80">
          Save
        </button>
      </div>
    </div>
  )
}

export default Sidebar
