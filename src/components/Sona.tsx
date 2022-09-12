import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

export default function Sona(props: {
  selected: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}) {
  const images = [
    {
      src: '../public/1.png',
      artist: '@rezcoles',
    },
    {
      src: '../public/2.png',
      artist: '@rabiespup',
    },
    {
      src: '../public/3.png',
      artist: '@accentaigu_tw',
    },
  ]

  return (
    <div className="grid grid-cols-9 text-subtext1 h-full">
      <div className="m-5 flex gap-3 flex-col col-span-2">
        {images.map((image, idx) => (
          <label
            className={clsx(
              'p-4 border-subtext1 border-solid border-2 rounded-lg w-full hover:text-crust hover:bg-subtext1 justify-center align-center flex transition opacity cursor-pointer overflow-x-clip',
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
      <div className="col-span-5">
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
      <div className="m-5 col-span-2 text-right flex flex-col justify-between overflow-scroll">
        <div>
          <p className="text-3xl mb-2">
            <span className="text-[#f86262]">M</span>
            <span className="text-[#f8d362]">a</span>
            <span className="text-[#adf862]">r</span>
            <span className="text-[#62f888]">s</span>
            <span className="text-[#62f8f8]">h</span>
            <span className="text-[#6288f8]">a</span>
            <span className="text-[#ad62f8]">l</span>
            <span className="text-[#f862d3]">l</span>
          </p>
          <p className="text-xl mb-2">Professional Deer-dog Thing</p>
          <p className="text-xl">he/they/it</p>
        </div>
        <div>
          <p className="text-3xl mb-2">Description</p>
          <p className="text-md">
            Current design consists of white (marshmellow) antlers, paws/hooves
            for feet (your choice), green tipped hair (maybe), a spiked collar
            and a septum ring. Marshall loves axolotls (specifically his
            boyfriend), food, and being a dumbass. He hates olives, meatloaf,
            his dad and dealing with the technically-inept (he's not working
            tech support anytime soon). He enjoys being lazy, coding, and
            talking to his boyfriend about anything.
          </p>
        </div>
        <div>
          <p className="text-3xl mb-2">Color Palette</p>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-lg bg-[#F4E1D3] text-crust rounded-lg inline-block px-3 py-1">
              Fur (Light)
            </p>
            <p className="text-lg bg-[#BAA088] text-crust rounded-lg inline-block px-3 py-1">
              Fur (Medium)
            </p>
            <p className="text-lg bg-[#95785A] text-crust rounded-lg inline-block px-3 py-1">
              Fur (Dark)
            </p>
            <p className="text-lg bg-[#DE614D] text-crust rounded-lg inline-block px-3 py-1">
              Left Eye
            </p>
            <p className="text-lg bg-[#EDE167] text-crust rounded-lg inline-block px-3 py-1">
              Right Eye
            </p>
            <p className="text-lg bg-[#1E1D1B] text-subtext1 rounded-lg inline-block px-3 py-1">
              Paw Pad
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
