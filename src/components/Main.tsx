import { useState } from 'react'
import Statusbar from './Statusbar'
import Window from './Window'

export default function Main() {
  const [active, setActive] = useState(1)

  return (
    <main className="font-jetbrains m-auto bg-[url('/wall.png')] overflow-clip">
      <div className="p-5 gap-5 w-screen h-screen inline-flex flex-col">
        <Statusbar active={active} setActive={setActive} />
        <Window active={active} />
      </div>
    </main>
  )
}
