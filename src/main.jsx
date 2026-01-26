import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavbarKR from './Components/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarKR></NavbarKR>
    <App />
  </React.StrictMode>,
)
