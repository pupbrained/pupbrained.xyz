import clsx from 'clsx'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { RandomReveal } from 'react-random-reveal'

export default function Terminal() {
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

  const inputElement = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState('')
  const [valid, setValid] = useState(false)
  const [commands, setCommands] = useState<
    {
      name: string
      value: React.ReactNode
    }[]
  >([])

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }, [])

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      containerId: 'term',
      duration: 0,
    })
  }

  const makeAbout = (
    input: string,
    name: string,
    prns: string,
    favColor: string,
    favHobby: string,
    gender: string,
    favThing: string
  ) => {
    setCommands([
      ...commands,
      {
        name: input,
        value: (
          <div className="inline-flex">
            <img
              title={`An image resembling ${name} in ASCII art`}
              src={`public/${name.toLowerCase()}.png`}
              className="w-[185px] h-[185px]"
            ></img>
            <div className="pl-3">
              <p>
                ╭───
                <span className="text-green">
                  &nbsp;{name.toLowerCase()}@possums.xyz&nbsp;
                </span>
                ─────────────────────╮
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-red"></span>
                &nbsp;&nbsp;{name}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-peach"></span>
                &nbsp;&nbsp;{prns}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-yellow"></span>
                &nbsp;&nbsp;{favColor}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-green"></span>
                &nbsp;&nbsp;{favHobby}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-blue"></span>
                &nbsp;&nbsp;{gender}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-purple"></span>
                &nbsp;&nbsp;{favThing}
              </p>
              <p>╰──────────────────────────────────────────╯</p>
            </div>
          </div>
        ),
      },
    ])
  }

  const makeContactLink = (
    icon: string,
    iconColor: string,
    name: string,
    username: string,
    link: string,
    className: string
  ) => {
    return (
      <p>
        <span className={`${iconColor} font-hack`}>{icon}</span>
        :&nbsp;
        <a
          title={`A ${name} link pointing to ${username}`}
          href={link}
          className={className}
        >
          <RandomReveal
            isPlaying
            duration={1}
            updateInterval={0.04}
            characterSet={['&', '#', '*', '+', '%', '?', '£', '@', '§', '$']}
            characters={username}
          ></RandomReveal>
        </a>
      </p>
    )
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const randomAnim = [
      'allsides allsides-1 hover:allsides-1to3-hover',
      'allsides allsides-2 hover:allsides-1to3-hover',
      'allsides allsides-3 hover:allsides-1to3-hover',
      'allsides allsides-4 allsides-4to5 hover:allsides-4to6-hover',
      'allsides allsides-5 allsides-4to5 hover:allsides-4to6-hover',
      'allsides allsides-6 hover:allsides-4to6-hover',
    ]

    const getRandom = (arr: string[]) => {
      return arr[Math.floor(Math.random() * arr.length)]
    }

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
      makeAbout(
        input,
        'Mars',
        'they/pup/vi',
        'Green',
        'Coding',
        'Agender',
        'Boyfriend :]'
      )
      break
    case 'herb':
      makeAbout(
        input,
        'Herb',
        'they/it',
        'Purple',
        'Games',
        'Nonbinary',
        'Making blorp noises'
      )
      break
    case 'tofu':
      makeAbout(
        input,
        'Tofu',
        'they/he/it',
        'Blue',
        'Sleeping',
        'Demiboy',
        'Meowing'
      )
      break
    case 'fen':
      makeAbout(
        input,
        'Fen',
        'they/them',
        'Orange',
        'Cuddling',
        'Agender',
        'More cuddling'
      )
      break
    case 'river':
      makeAbout(
        input,
        'River',
        'it/they',
        'Blue',
        'Swimming',
        'Agender',
        'Water'
      )
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
    case 'contact':
      setCommands([
        ...commands,
        {
          name: input,
          value: (
            <>
              {makeContactLink(
                '暑',
                'text-[#1d9bf0]',
                'Twitter',
                'pupbrained',
                'https://twitter.com/pupbrained',
                getRandom(randomAnim)
              )}
              {makeContactLink(
                '',
                'text-[#0088cc]',
                'Telegram',
                'pupbrained',
                'https://t.me/pupbrained',
                getRandom(randomAnim)
              )}
              {makeContactLink(
                'ﭮ',
                'text-[#5865f2]',
                'Discord',
                'mard#1999',
                'https://discord.com/users/449287407142043658',
                getRandom(randomAnim)
              )}
              {makeContactLink(
                '',
                'text-[#171515]',
                'Github',
                'marsupialgutz',
                'https://github.com/marsupialgutz',
                getRandom(randomAnim)
              )}
              {makeContactLink(
                '戮',
                'text-[#00c3e7]',
                'Steam',
                'marsupialgutz',
                'https://steamcommunity.com/id/marsupialgutz',
                getRandom(randomAnim)
              )}
              {makeContactLink(
                '阮',
                'text-[#1DB954]',
                'Spotify',
                'marsupialgutz',
                'https://open.spotify.com/user/21hvrddjilwmxvx5aueqyamyy',
                getRandom(randomAnim)
              )}
              {makeContactLink(
                '',
                'text-[#f25871]',
                'Misskey',
                'mars',
                'https://mk.possums.xyz/@mars',
                getRandom(randomAnim)
              )}
            </>
          ),
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
          value: <p>Invalid command. Enter 'help' for available commands.</p>,
        },
      ])
      break
    }

    setInput('')

    setTimeout(scrollToBottom, 0.000000000001) // this should not fucking work but ok
  }

  useEffect(() => {
    validCommandValues.includes(input) ? setValid(true) : setValid(false)
  }, [input])

  return (
    <div id="term" className="text-sm h-full w-full overflow-scroll">
      <div className="m-3 text-base text-subtext1">
        <p>
          <span className="text-[#F6A2A2]">W</span>
          <span className="text-[#F6BEA2]">e</span>
          <span className="text-[#F6DAA2]">l</span>
          <span className="text-[#F6F6A2]">c</span>
          <span className="text-[#DAF6A2]">o</span>
          <span className="text-[#BEF6A2]">m</span>
          <span className="text-[#A2F6A2]">e&nbsp;</span>
          <span className="text-[#A2F6BE]">t</span>
          <span className="text-[#A2F6DA]">o&nbsp;</span>
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
          Type&nbsp;'<span className="text-green">help</span>'&nbsp;for
          available commands.
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
          <span className="pr-[9.6px] text-sapphire">&gt;</span>
          <input
            autoFocus
            ref={inputElement}
            name="input"
            id="input"
            type="text"
            value={input}
            onChange={onChange}
            aria-label="input"
            autoComplete="off"
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
