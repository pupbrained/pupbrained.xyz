import Terminal from './Terminal'

export default function Window(props: { active: number }) {
  return (
    <div className="flex items-center justify-center h-full w-full overflow-hidden">
      {
        {
          1: <Terminal />,
          2: <p>I'm workspace 2</p>,
          3: <p>I'm workspace 3 lol</p>,
        }[props.active]
      }
    </div>
  )
}
