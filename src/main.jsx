import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './components/context.jsx'
import App from './App.jsx'
import './index.css'
import { FavoritesProvider } from './context/favouritecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <FavoritesProvider>
     <App />
     </FavoritesProvider>
    </UserProvider>  
    </BrowserRouter>
    
  </React.StrictMode>,
)
