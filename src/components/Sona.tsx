import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import img1 from '/public/1.webp'
import img2 from '/public/2.webp'
import img3 from '/public/3.webp'

export default function Sona(props: {
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}) {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(
      typeof window != 'undefined' && window.innerWidth
    )

    function changeWindowSize() {
      setWindowSize(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', changeWindowSize)

      return () => {
        window.removeEventListener('resize', changeWindowSize)
      }
    }, [])

    return windowSize
  }

  const isMobile = useWindowSize() < 1280

  const authors = ['@rezcoles', '@rabiespup', '@accentaigu_tw']

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div className="flex flex-col xl:grid xl:grid-cols-9 text-subtext1 h-full overflow-scroll">
      {isMobile ? (
        <>
          <div className="order-2 xl:order-[0] flex flex-col gap-3 m-5">
            {authors.map((author, idx) => (
              <label
                className={clsx(
                  'p-4 border-subtext1 border-solid border-2 rounded-lg w-full hover:text-crust hover:bg-subtext1 justify-center align-center flex transition opacity cursor-pointer overflow-x-clip',
                  props.selected == idx
                    ? 'bg-subtext1 text-crust'
                    : 'text-subtext1'
                )}
              >
                <input
                  defaultChecked
                  className="hidden"
                  onClick={() => props.setSelected(idx)}
                  type="radio"
                  name="sona"
                />
                {idx == props.selected ? (
                  <a
                    href={`https://twitter.com/${author.substring(1)}`}
                    className="hover:text-[#1d9bf0] transition opacity"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    {isHovering ? (
                      <span>{author} 暑</span>
                    ) : (
                      <span>{author}</span>
                    )}
                  </a>
                ) : (
                  <p>{author}</p>
                )}
              </label>
            ))}
          </div>
          <div className="order-5 xl:order-[0] m-5 gap-3 flex flex-col col-span-2 justify-between">
            <div className="order-3 xl:order-[0]">
              <p className="text-3xl mb-2">Artpiece Requests</p>
              <p>
                If you'd like me to add your art to this page, just click&nbsp;
                <a
                  href="mailto:mars@possums.xyz?subject=Add art to site"
                  className="bg-blue text-crust px-1 rounded-md"
                >
                  here
                </a>
                &nbsp;to send me an email. Otherwise, you can send a feature
                request to my&nbsp;
                <a
                  href="https://github.com/marsupialgutz/possums.xyz-new/issues/new?assignees=marsupialgutz&labels=enhancement&template=new-artpiece-for-site.md&title=New+Artpiece"
                  className="bg-blue text-crust px-1 rounded-md"
                >
                  GitHub Repo
                </a>
                &nbsp;or contact me on any platform in the&nbsp;
                <span className="text-green">contact</span>&nbsp;command. If
                possible, please send a transparent version of the art.
              </p>
            </div>
            <div className="order-6 xl:order-[0]">
              <p className="text-3xl mb-2">Extra Info</p>
              <ul className="list-disc list-inside">
                <li>
                  You are allowed to make any art of Marshall,&nbsp;
                  <span className="bg-red text-crust px-1 rounded-md font-bold">
                    as long as it is SFW!
                  </span>
                </li>
                <li>
                  You can take artistic liberties, but&nbsp;
                  <span className="bg-red text-crust px-1 rounded-md font-bold">
                    please approve them with me
                  </span>
                  &nbsp; beforehand.
                </li>
                <li>
                  I see Marshall as an inner version of myself, therefore I am
                  very protective of him. If you have any worries about
                  something you want to draw involving him,&nbsp;
                  <span className="bg-red text-crust px-1 rounded-md font-bold">
                    just ask me first!
                  </span>
                  &nbsp;I'll be glad to answer.
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="m-5 flex gap-3 flex-col col-span-2 justify-between">
          <div className="flex flex-col gap-3">
            {authors.map((author, idx) => (
              <label
                className={clsx(
                  'p-4 border-subtext1 border-solid border-2 rounded-lg w-full hover:text-crust hover:bg-subtext1 justify-center align-center flex transition opacity cursor-pointer overflow-x-clip',
                  props.selected == idx
                    ? 'bg-subtext1 text-crust'
                    : 'text-subtext1'
                )}
              >
                <input
                  defaultChecked
                  className="hidden"
                  onClick={() => props.setSelected(idx)}
                  type="radio"
                  name="sona"
                />
                {idx == props.selected ? (
                  <a
                    href={`https://twitter.com/${author.substring(1)}`}
                    className="hover:text-[#1d9bf0] transition opacity"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    {isHovering ? (
                      <span>{author} 暑</span>
                    ) : (
                      <span>{author}</span>
                    )}
                  </a>
                ) : (
                  <p>{author}</p>
                )}
              </label>
            ))}
          </div>
          <div>
            <p className="text-3xl mb-2">Artpiece Requests</p>
            <p>
              If you'd like me to add your art to this page, just click&nbsp;
              <a
                href="mailto:mars@possums.xyz?subject=Add art to site"
                className="bg-blue text-crust px-1 rounded-md"
              >
                here
              </a>
              &nbsp;to send me an email. Otherwise, you can send a feature
              request to my&nbsp;
              <a
                href="https://github.com/marsupialgutz/possums.xyz-new/issues/new?assignees=marsupialgutz&labels=enhancement&template=new-artpiece-for-site.md&title=New+Artpiece"
                className="bg-blue text-crust px-1 rounded-md"
              >
                GitHub Repo
              </a>
              &nbsp;or contact me on any platform in the&nbsp;
              <span className="text-green">contact</span>&nbsp;command. If
              possible, please send a transparent version of the art.
            </p>
          </div>
          <div>
            <p className="text-3xl mb-2">Extra Info</p>
            <ul className="list-disc list-inside">
              <li>
                You are allowed to make any art of Marshall,&nbsp;
                <span className="bg-red text-crust px-1 rounded-md font-bold">
                  as long as it is SFW!
                </span>
              </li>
              <li>
                You can take artistic liberties, but&nbsp;
                <span className="bg-red text-crust px-1 rounded-md font-bold">
                  please approve them with me
                </span>
                &nbsp; beforehand.
              </li>
              <li>
                I see Marshall as an inner version of myself, therefore I am
                very protective of him. If you have any worries about something
                you want to draw involving him,&nbsp;
                <span className="bg-red text-crust px-1 rounded-md font-bold">
                  just ask me first!
                </span>
                &nbsp;I'll be glad to answer.
              </li>
            </ul>
          </div>
        </div>
      )}
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
              authors.map((author, idx) => {
                const imgs = [img1, img2, img3]
                const image = new Image()
                image.src = imgs[idx]
                return (
                  <img
                    className="h-[40vh] xl:h-[initial] xl:max-h-[80vh] rounded-lg"
                    src={imgs[idx]}
                    alt={author}
                  />
                )
              })[props.selected]
            }
          </motion.div>
        </AnimatePresence>
      </div>
      {isMobile ? (
        <>
          <div className="text-center order-[-1]">
            <p className="text-5xl mb-2 mt-5">
              <span className="text-[#f86262]">M</span>
              <span className="text-[#f8d362]">a</span>
              <span className="text-[#adf862]">r</span>
              <span className="text-[#62f888]">s</span>
              <span className="text-[#62f8f8]">h</span>
              <span className="text-[#6288f8]">a</span>
              <span className="text-[#ad62f8]">l</span>
              <span className="text-[#f862d3]">l</span>
            </p>
            <p className="text-xl mb-2">Deer-dog Thing</p>
            <p className="text-xl mb-5 xl:mb-0">he/they/it</p>
          </div>
          <div className="order-2 m-5">
            <div>
              <p className="text-3xl mb-2">Description</p>
              <p className="text-md mb-5 xl:mb-0">
                Current design consists of white (marshmellow) antlers,
                paws/hooves for feet (your choice), green tipped hair (maybe), a
                spiked collar and a septum ring. Marshall loves axolotls
                (specifically his boyfriend), food, and being a dumbass. He
                hates olives, meatloaf, his dad and dealing with the
                technically-inept (he's not working tech support anytime soon).
                He enjoys being lazy, coding, and talking to his boyfriend about
                anything.
              </p>
            </div>
            <div>
              <p className="text-3xl mb-2">Color Palette</p>
              <div className="flex flex-col gap-2 text-center">
                <p className="text-lg bg-[#F4E1D3] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                  <span>Fur (Light)</span>
                  <span>#F4E1D3</span>
                </p>
                <p className="text-lg bg-[#BAA088] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                  <span>Fur (Medium)</span>
                  <span>#BAA088</span>
                </p>
                <p className="text-lg bg-[#95785A] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                  <span>Fur (Dark)</span>
                  <span>#95785A</span>
                </p>
                <p className="text-lg bg-[#DE614D] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                  <span>Left Eye</span>
                  <span>#DE614D</span>
                </p>
                <p className="text-lg bg-[#EDE167] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                  <span>Right Eye</span>
                  <span>#EDE167</span>
                </p>
                <p className="text-lg bg-[#1E1D1B] text-subtext1 rounded-lg inline-flex px-3 py-1 justify-between">
                  <span>Paw Pad</span>
                  <span>#1E1D1B</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="order-3 xl:order-[0] m-5 col-span-2 text-left xl:text-right flex flex-col justify-between scrollbar-hide">
          <div className="text-center xl:text-right">
            <p className="text-5xl mb-2">
              <span className="text-[#f86262]">M</span>
              <span className="text-[#f8d362]">a</span>
              <span className="text-[#adf862]">r</span>
              <span className="text-[#62f888]">s</span>
              <span className="text-[#62f8f8]">h</span>
              <span className="text-[#6288f8]">a</span>
              <span className="text-[#ad62f8]">l</span>
              <span className="text-[#f862d3]">l</span>
            </p>
            <p className="text-xl mb-2">Deer-dog Thing</p>
            <p className="text-xl mb-5 xl:mb-0">he/they/it</p>
          </div>
          <div>
            <p className="text-3xl mb-2">Description</p>
            <p className="text-md mb-5 xl:mb-0">
              Current design consists of white (marshmellow) antlers,
              paws/hooves for feet (your choice), green tipped hair (maybe), a
              spiked collar and a septum ring. Marshall loves axolotls
              (specifically his boyfriend), food, and being a dumbass. He hates
              olives, meatloaf, his dad and dealing with the technically-inept
              (he's not working tech support anytime soon). He enjoys being
              lazy, coding, and talking to his boyfriend about anything.
            </p>
          </div>
          <div>
            <p className="text-3xl mb-2">Color Palette</p>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-lg bg-[#F4E1D3] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                <span>Fur (Light)</span>
                <span>#F4E1D3</span>
              </p>
              <p className="text-lg bg-[#BAA088] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                <span>Fur (Medium)</span>
                <span>#BAA088</span>
              </p>
              <p className="text-lg bg-[#95785A] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                <span>Fur (Dark)</span>
                <span>#95785A</span>
              </p>
              <p className="text-lg bg-[#DE614D] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                <span>Left Eye</span>
                <span>#DE614D</span>
              </p>
              <p className="text-lg bg-[#EDE167] text-crust rounded-lg inline-flex px-3 py-1 justify-between">
                <span>Right Eye</span>
                <span>#EDE167</span>
              </p>
              <p className="text-lg bg-[#1E1D1B] text-subtext1 rounded-lg inline-flex px-3 py-1 justify-between">
                <span>Paw Pad</span>
                <span>#1E1D1B</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
