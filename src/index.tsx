import React from 'react';
import './index.css';
import { User } from './providers/user';
import App from "./components/App"
import { createRoot } from "react-dom/client"
import AuthIsLoaded from './components/AuthIsLoaded';


const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <User.Provider>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </User.Provider>
  </React.StrictMode>,
)