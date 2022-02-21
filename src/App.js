import React, { useState, useEffect } from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString()
  const [timer, setTimer] = useState(time)

  const tick = () => {
    const newTime = new Date().toLocaleTimeString()
    setTimer(newTime)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer, time])
  return (
    <div className='flex justify-center items-center font-bold text-5xl'>
      {timer}
    </div>
  )
}

export default App
