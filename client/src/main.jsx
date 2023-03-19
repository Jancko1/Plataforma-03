import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Auth0Provider
    domain="dev-cxfq8ysmldkezn86.us.auth0.com"
    clientId="VOgO454dCLlGdbfeXRXDm6eAZqZvzGr1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

  </React.StrictMode>,
)
