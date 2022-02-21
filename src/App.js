import React, { useState, useEffect } from 'react'

const App = () => {
  let time = new Date()
  const [timer, setTimer] = useState(time.toLocaleTimeString())

  const tick = () => {
    setTimer(time.toLocaleTimeString())
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval, tick)
    }
  }, [timer])
  return (
    <div className='flex justify-center items-center font-bold text-5xl'>
      {timer}
    </div>
  )
}

export default App
