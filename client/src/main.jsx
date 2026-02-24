// Point d'entrée de l'application React //

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS (depuis node_modules)
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
