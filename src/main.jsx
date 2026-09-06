import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickerPage from './page/clicker.jsx'
import ToDo from './page/todo.jsx'
import Culculator from './page/calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Culculator />
    {/* <ToDo />
    <App />
    <ClickerPage /> */}
  </StrictMode>,
)
