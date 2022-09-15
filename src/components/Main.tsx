import { useState } from 'react'
import Statusbar from './Statusbar'
import Window from './Window'

export default function Main() {
  const [active, setActive] = useState(2)

  return (
    <main className="font-jetbrains bg-[url('/wall.webp')] h-full w-full p-5">
      <div className="gap-5 w-full h-full flex flex-col">
        <Statusbar active={active} setActive={setActive} />
        <Window active={active} />
      </div>
    </main>
  )
}
