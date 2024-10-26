import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom';
// import { createRoot } from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-hrmgixm7udp8vimi.us.auth0.com"
    clientId="3eEqo6WKzjHpjcXp9da5jna2Vf8Nbotc"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);

reportWebVitals();
