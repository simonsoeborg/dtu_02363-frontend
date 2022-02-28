import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
{/*     <Auth0Provider
     domain="simonsoeborg.eu.auth0.com"
     clientId="9A0O0l5O1veNOiCTssgfWexw06qezDb9"
     redirectUri={window.location.origin}> */}
      <App />
{/*     </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);