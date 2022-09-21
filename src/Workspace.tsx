import React from 'react'
import { Dispatch, SetStateAction } from 'react'

export default function Workspace(props: {
  active: number
  setActive: Dispatch<SetStateAction<number>>
}) {
  const icons = ['一', '二']

  return (
    <>
      {icons.map((icon, idx) => (
        <a
          key={idx}
          onClick={() => props.setActive(idx + 1)}
          className='font-hack py-[5px] px-[12px] cursor-pointer hover:bg-mauve hover:text-crust rounded-2xl transition opacity'
        >
          {props.active === idx + 1 ? '' : icon}
        </a>
      ))}
    </>
  )
}
