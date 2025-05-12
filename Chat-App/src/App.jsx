import { useContext } from 'react'
import './App.css'
import { AuthContext } from './context/AuthContext'
import Chat from './components/Chat'
import Login from './components/Login'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      {user ? <Chat /> : <Login />} 
    </div>
  );
}

export default App;
