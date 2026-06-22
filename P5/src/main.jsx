import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div classname="bg-[#f2f2f2] h-9/10">
    <App />
  </div>
)
