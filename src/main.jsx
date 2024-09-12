import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { ReservedContextProvider } from './contexts/ReserveContext.jsx'
import { InfoContextProvider } from './contexts/infoContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReservedContextProvider>
        <InfoContextProvider>
          <App />
        </InfoContextProvider>
      </ReservedContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
