import BrushButton from "./svg/BrushButton"
import EraserButton from "./svg/EraserButton"

const Tools: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center">
      <div className="mx-5 shadow-md my-3 lg:my-0 hover:shadow-none hover:-translate-y-1 transition-all ease-in-out duration-300">
        <EraserButton />
      </div>
      <div className="mx-5 shadow-md hover:shadow-none hover:-translate-y-1 transition-all ease-in-out duration-300">
        <BrushButton />
      </div>
    </div>
  )
}

export default Tools
