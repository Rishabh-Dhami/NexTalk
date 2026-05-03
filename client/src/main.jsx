// React entry point: renders App component with Router wrapper
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
      {/* <Toaster /> */}
    </BrowserRouter>
)