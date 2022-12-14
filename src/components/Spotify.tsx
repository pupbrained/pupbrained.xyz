import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function Spotify(props: {
  isMobileSmall: boolean
  isMobileMed: boolean
}) {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    async function update() {
      const val = await (await fetch('https://music.possums.xyz')).json()
      setStatus(val)
    }
    update()
    const interval = setInterval(update, 3000)
    return () => clearInterval(interval)
  }, [])

  const length = props.isMobileSmall ? 15 : props.isMobileMed ? 18 : 30

  return (
    <div className="flex items-center gap-3 text-green pl-3 sm:pl-0">
      <p></p>
      {status != 'Loading...' &&
      status != 'No song playing' &&
      status.length > length ? (
          <Marquee
            className="bottom-[1px] max-w-[100px] sm:max-w-[150px]"
            gradient={false}
            speed={60}
          >
            {status}&nbsp;
          </Marquee>
        ) : (
          <p>
            {status != 'Loading...' && status != 'N/A'
              ? status.substring(0, status.length - 2)
              : status}
          </p>
        )}
    </div>
  )
}
