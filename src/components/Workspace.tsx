import clsx from 'clsx'
import { useState } from 'react'

export default function Workspace() {
  const [active, setActive] = useState(1)
  return (
    <>
      <a
        onClick={() => setActive(1)}
        className={clsx(
          'py-[5px] px-[12px] cursor-pointer',
          active === 1 ? 'bg-mauve text-crust rounded-2xl' : ''
        )}
      >
        一
      </a>
      <a
        onClick={() => setActive(2)}
        className={clsx(
          'py-[5px] px-[12px] cursor-pointer',
          active === 2 ? 'bg-mauve text-crust rounded-2xl' : ''
        )}
      >
        二
      </a>
      <a
        onClick={() => setActive(3)}
        className={clsx(
          'py-[5px] px-[12px] cursor-pointer',
          active === 3 ? 'bg-mauve text-crust rounded-2xl' : ''
        )}
      >
        三
      </a>
    </>
  )
}
