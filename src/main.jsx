import { AppProvider } from './AppContext'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
  </BrowserRouter>
)