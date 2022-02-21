import React, { useState, useEffect } from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString()
  let date = new Date().toLocaleDateString()
  const [timer, setTimer] = useState(time)
  const [dateToday, setDateToday] = useState(date)

  const tick = () => {
    const newTime = new Date().toLocaleTimeString()
    const newDate = new Date().toDateString()
    setTimer(newTime)
    setDateToday(newDate)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer, time])
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='font-bold text-5xl'>{timer}</div>
      <div className='text-3xl mt-5'>{dateToday}</div>
    </div>
  )
}

export default App
