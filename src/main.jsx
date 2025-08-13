import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShowContextProvider from './context/Showcontext.jsx'

createRoot(document.getElementById('root')).render(
    <ShowContextProvider>
        <App />
    </ShowContextProvider>
  
)
