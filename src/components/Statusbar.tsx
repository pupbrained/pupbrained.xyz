import { Dispatch, SetStateAction } from 'react'
import Workspace from './Workspace'
import Spotify from './Spotify'
import Date from './Date'
import Time from './Time'

export default function Statusbar(props: {
  active: number
  setActive: Dispatch<SetStateAction<number>>
  isMobileSmall: boolean
  isMobileMed: boolean
}) {
  return (
    <div className="flex items-center justify-center m-auto w-full">
      <div className="text-sm h-[34px] inline-flex rounded-2xl items-center justify-between bg-mantle">
        <div className="flex items-center px-4 gap-2 rounded-l-2xl text-purple bg-base h-full">
          <Workspace active={props.active} setActive={props.setActive} />
        </div>
        <div className="flex gap-4">
          <div className="items-center gap-4 pl-5 hidden sm:flex">
            <p className="text-yellow"> </p>
            <p className="text-yellow">Mard-Fi</p>
          </div>
          <Spotify
            isMobileSmall={props.isMobileSmall}
            isMobileMed={props.isMobileMed}
          />
          <Date />
          <Time />
        </div>
      </div>
    </div>
  )
}
