import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

function Login() {

    const hlLogin =()=>{
        signInWithPopup(auth, provider).catch((err)=> alert(err.message));
    }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button onClick={hlLogin} className="bg-blue-500 px-6 py-2 text-white rounded shadow">
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
