import clsx from 'clsx'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

const Terminal = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom({
      containerId: 'term',
      duration: 0,
    })
  }

  const validCommandValues = [
    'help',
    'clear',
    'contact',
    'mars',
    'herb',
    'tofu',
    'fen',
    'river',
    'geeky',
  ]

  const [input, setInput] = useState('')
  const [valid, setValid] = useState(false)
  const [commands, setCommands] = useState<
    {
      name: string
      value: React.ReactNode
    }[]
  >([])

  useEffect(() => {
    validCommandValues.includes(input) ? setValid(true) : setValid(false)
  }, [input])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    switch (input.toLowerCase()) {
    case 'help':
      setCommands([
        ...commands,
        {
          name: input,
          value: (
            <p>
                Available commands:{' '}
              {validCommandValues
                .map<React.ReactNode>((command) => (
                  <span className="text-green">{command}</span>
                ))
                .reduce((prev, curr) => [prev, ', ', curr])}
                .
            </p>
          ),
        },
      ])
      break
    case 'mars':
      setCommands([
        ...commands,
        {
          name: input,
          value: (
            <div className="inline-flex">
              <img
                title="An image resembling Mars in ASCII art"
                src="/src/img/mard.png"
                className="width-[150px] height-[150px]"
              ></img>
              <div className="pl-6">
                <p>
                    ╭───
                  <span className="text-green"> mars@possums.xyz </span>
                    ─────────────────────╮
                </p>
                <p>
                    &nbsp;&nbsp;<span className="text-red"></span>
                    &nbsp;&nbsp;Mars
                </p>
                <p>
                    &nbsp;&nbsp;<span className="text-peach"></span>
                    &nbsp;&nbsp;they/pup/vi
                </p>
                <p>
                    &nbsp;&nbsp;<span className="text-yellow"></span>
                    &nbsp;&nbsp;Green
                </p>
                <p>
                    &nbsp;&nbsp;<span className="text-green"></span>
                    &nbsp;&nbsp;Coding
                </p>
                <p>
                    &nbsp;&nbsp;<span className="text-blue"></span>
                    &nbsp;&nbsp;Agender
                </p>
                <p>
                    &nbsp;&nbsp;<span className="text-purple"></span>
                    &nbsp;&nbsp;Boyfriend :]
                </p>
                <p>╰──────────────────────────────────────────╯</p>
              </div>
            </div>
          ),
        },
      ])
      break
    case 'clear':
      setCommands([])
      break
    case 'geeky':
      setCommands([
        ...commands,
        {
          name: input,
          value: <p>the guy</p>,
        },
      ])
      break
    case '':
      break
    default:
      setCommands([
        ...commands,
        {
          name: input,
          value: (
            <p>Command not found. Enter 'help' for available commands.</p>
          ),
        },
      ])
      break
    }

    setInput('')

    setTimeout(scrollToBottom, 0.000000000001) // this should not fucking work but ok
  }

  return (
    <div
      id="term"
      className="term text-sm h-full w-full bg-basetranslucent rounded-2xl backdrop-blur-md overflow-scroll"
    >
      <div className="m-3 text-base text-subtext1">
        <p>
          <span className="text-[#F6A2A2]">W</span>
          <span className="text-[#F6BEA2]">e</span>
          <span className="text-[#F6DAA2]">l</span>
          <span className="text-[#F6F6A2]">c</span>
          <span className="text-[#DAF6A2]">o</span>
          <span className="text-[#BEF6A2]">m</span>
          <span className="text-[#A2F6A2]">e </span>
          <span className="text-[#A2F6BE]">t</span>
          <span className="text-[#A2F6DA]">o </span>
          <span className="text-[#A2F6F6]">M</span>
          <span className="text-[#A2DAF6]">a</span>
          <span className="text-[#A2BEF6]">r</span>
          <span className="text-[#A2A2F6]">S</span>
          <span className="text-[#BEA2F6]">h</span>
          <span className="text-[#DAA2F6]">e</span>
          <span className="text-[#F6A2F6]">l</span>
          <span className="text-[#F6A2DA]">l</span>
          <span className="text-[#F6A2BE]">!</span>
        </p>
        <br />
        <p>
          Type '<span className="text-green">help</span>' for available
          commands.
        </p>
        <br />
        <p>
          {commands.map((command) => (
            <>
              <p>
                <span className="text-sapphire">&gt;</span>{' '}
                {validCommandValues.includes(command.name.toLowerCase()) ? (
                  <span className="text-green">{command.name}</span>
                ) : (
                  <span className="text-red">{command.name}</span>
                )}
              </p>
              {command.value}
              <br />
            </>
          ))}
        </p>
        <form onSubmit={onSubmit}>
          <span className="pr-[9.5px] text-sapphire">&gt;</span>
          <input
            autoFocus
            name="input"
            id="input"
            value={input}
            onChange={onChange}
            aria-label="input"
            className={clsx(
              'bg-transparent border-none outline-none w-[calc(100%-20px)] caret-subtext1',
              valid ? 'text-green' : 'text-red'
            )}
          ></input>
        </form>
      </div>
    </div>
  )
}

export default Terminal
