import React from 'react'
import WeatherApp from './components/WeatherApp'

function App() {
  return (
    <div className='w-full h-[100vh] bg-[#e2d4ff] flex-col flex justify-center items-center '>
        <h1 className='text-[2rem] underline decoration-2'>Weather Forecast</h1><br />
        <WeatherApp/>       
    </div>
  )
}

export default App


