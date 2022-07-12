import colors from "../data/colors.json"

const ColorPallete: React.FC = () => {
  const MAX_PER_LINE = 3

  return (
    <div className="flex flex-col border-2 p-3 items-center justify-center my-5">
      <div className="grid grid-cols-8 lg:grid-cols-8 justify-items-center gap-4 justify-center">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color.code.hex }}
            className={`w-8 col-span-4 rounded-md h-8 cursor-pointer opacity-50`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ColorPallete
