import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainRouter from './router/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainRouter/>
      <Footer/>
    </>
  )
}

export default App
