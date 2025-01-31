import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* main.jsx è il file che prende App.jsx e lo inserisce dentro index.html, nel div con id root.*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Qui montiamo il componente App */}
  </StrictMode>,
)
