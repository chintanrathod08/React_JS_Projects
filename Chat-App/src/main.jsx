import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/tailwindcss/index.css'
import '../node_modules/@remixicon/react'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
