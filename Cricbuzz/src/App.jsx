import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainRouter from './router/MainRouter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainRouter/>
      <Footer/>
    </>
  )
}

export default App
