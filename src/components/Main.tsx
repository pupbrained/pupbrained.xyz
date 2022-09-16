import { useEffect, useState } from 'react'
import Statusbar from './Statusbar'
import Window from './Window'

export default function Main() {
  const [active, setActive] = useState(1)

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

  const large = useWindowSize() < 1280
  const medium = useWindowSize() < 768
  const small = useWindowSize() < 640

  return (
    <main className="font-jetbrains bg-[url('/wall.webp')] h-full w-full p-5">
      <div className="gap-5 w-full h-full flex flex-col">
        <Statusbar
          active={active}
          setActive={setActive}
          isMobileSmall={small}
          isMobileMed={medium}
        />
        <Window active={active} isMobile={large} />
      </div>
    </main>
  )
}
