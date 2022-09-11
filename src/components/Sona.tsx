import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

export default function Sona(props: {
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}) {
  const images = [
    {
      src: '/public/1.png',
      artist: '@rezcoles',
    },
    {
      src: '/public/2.webp',
      artist: '@rabiespup',
    },
    {
      src: '/public/3.webp',
      artist: '@accentaigu_tw',
    },
  ]

  return (
    <div className="grid grid-cols-5 text-subtext1 h-full">
      <div className="m-5 flex gap-3 flex-col">
        {images.map((image, idx) => (
          <label
            className={clsx(
              'p-4 border-subtext1 border-solid border-2 rounded-lg w-full hover:text-crust hover:bg-subtext1 justify-center align-center flex transition opacity cursor-pointer',
              props.selected == idx ? 'bg-subtext1 text-crust' : 'text-subtext1'
            )}
          >
            <input
              defaultChecked
              className="hidden"
              onClick={() => props.setSelected(idx)}
              type="radio"
              name="sona"
            />
            {image.artist}
          </label>
        ))}
      </div>
      <div className="col-span-3">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={props.selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex items-center justify-center"
          >
            {
              images.map((img) => {
                const image = new Image()
                image.src = img.src
                return (
                  <img
                    className="max-h-[80vh] rounded-lg"
                    src={img.src}
                    alt={img.artist}
                  />
                )
              })[props.selected]
            }
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="text-right m-5">
        <p className="text-3xl">
          <span className="block-line">
            <span>
              <span className="text-[#f86262]">M</span>
              <span className="text-[#f8d362]">a</span>
              <span className="text-[#adf862]">r</span>
              <span className="text-[#62f888]">s</span>
              <span className="text-[#62f8f8]">h</span>
              <span className="text-[#6288f8]">a</span>
              <span className="text-[#ad62f8]">l</span>
              <span className="text-[#f862d3]">l</span>
            </span>
          </span>
        </p>
        <p className="text-lg">Professional Deer-dog Thing</p>
      </div>
    </div>
  )
}
