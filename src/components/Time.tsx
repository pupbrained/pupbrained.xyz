import { useEffect, useState } from 'react'

const Time = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <p className="text-purple"> </p>
      <p className="pr-5 text-purple">
        {time
          .toLocaleTimeString('en-US', { hour12: true })
          .replace(/(.*)\D\d+/, '$1')}
      </p>
    </div>
  )
}

export default Time