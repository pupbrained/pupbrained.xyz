import React from 'react'
import Marquee from 'react-fast-marquee'
import { useQuery } from 'react-query'

export default function Spotify(props: {
  isMobileSmall: boolean
  isMobileMed: boolean
}) {
  const { isLoading, data } = useQuery('spotifyStatus', () =>
    fetch('https://music.pupbrained.xyz').then((res) => res.json())
  )

  const length = props.isMobileSmall ? 15 : props.isMobileMed ? 18 : 30

  return (
    <div className='flex items-center gap-3 text-green pl-3 sm:pl-0'>
      <p></p>
      {!isLoading && data != 'No song playing' && data.length > length ? (
        <Marquee
          className='bottom-[1px] max-w-[100px] sm:max-w-[150px]'
          gradient={false}
          speed={60}
        >
          {data}&nbsp;
        </Marquee>
      ) : (
        <p>
          {!isLoading && data != 'N/A'
            ? data.substring(0, data.length - 2)
            : isLoading
              ? 'Loading...'
              : data}
        </p>
      )}
    </div>
  )
}
