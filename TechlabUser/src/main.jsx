import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/tailwindcss/index.css'
import '../node_modules/@remixicon/react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </>
)
