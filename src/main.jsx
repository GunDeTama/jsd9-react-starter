// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Person from './components/person.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
    // <Person />
  // {/* </StrictMode>, */}
)
