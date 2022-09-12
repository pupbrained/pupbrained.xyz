export default function Workspace(props: {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}) {
  const icons = ['一', '二']

  return (
    <>
      {icons.map((icon, index) => (
        <a
          onClick={() => props.setActive(index + 1)}
          className="font-hack py-[5px] px-[12px] cursor-pointer hover:bg-mauve hover:text-crust rounded-2xl transition opacity"
        >
          {props.active === index + 1 ? '' : icon}
        </a>
      ))}
    </>
  )
}
