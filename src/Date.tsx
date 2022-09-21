import React from 'react'
import { useEffect, useState } from 'react'

export default function DateModule() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(() => new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex items-center gap-3 pr-3 sm:pr-0'>
      <p className='text-sky'></p>
      <p className='text-sky'>{date.toLocaleDateString('en-US')}</p>
    </div>
  )
}
