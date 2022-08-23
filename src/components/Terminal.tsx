const Terminal = () => {
  const commands = [
    "help",
    "clear",
    "contact",
    "mars",
    "herb",
    "tofu",
    "fen",
    "river",
  ]

  return (
    <div className="m-3 text-base text-[#bac2de]">
      <p>Available commands: {
        commands.map(command => (
          <p key={command} className="pr-2">{command}</p>
        ))
      }</p>
    </div>
  )
}

export default Terminal
