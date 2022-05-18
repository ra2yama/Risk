import React from 'react';
import './index.css';
import { User } from './providers/user';
import App from "./components/App"
import { createRoot } from "react-dom/client"


const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <User.Provider>
      <App />
    </User.Provider>
  </React.StrictMode>,
)