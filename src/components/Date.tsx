import { useEffect, useState } from "react"

const DateModule = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(() => new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <p className="text-[#89dceb]"></p>
      <p className="text-[#89dceb]">{date.toLocaleDateString("en-US")}</p>
    </div>
  )
}

export default DateModule
