import clsx from 'clsx'

export default function Workspace(props: {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <>
      <a
        onClick={() => props.setActive(1)}
        className={clsx(
          'py-[5px] px-[12px] cursor-pointer',
          props.active === 1 ? 'bg-mauve text-crust rounded-2xl' : ''
        )}
      >
        一
      </a>
      <a
        onClick={() => props.setActive(2)}
        className={clsx(
          'py-[5px] px-[12px] cursor-pointer',
          props.active === 2 ? 'bg-mauve text-crust rounded-2xl' : ''
        )}
      >
        二
      </a>
      <a
        onClick={() => props.setActive(3)}
        className={clsx(
          'py-[5px] px-[12px] cursor-pointer',
          props.active === 3 ? 'bg-mauve text-crust rounded-2xl' : ''
        )}
      >
        三
      </a>
    </>
  )
}
