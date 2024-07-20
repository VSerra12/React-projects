import ReactDOM from 'react-dom/client' // Un adaptador/conector (Interfaz)
import App from './App.jsx'
import './index.css'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap' // Incoporo los script de bootstrap
import { BrowserRouter } from 'react-router-dom'

// El punto más bajo de la aplicación REACT.
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
