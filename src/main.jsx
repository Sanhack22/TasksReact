import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TaskProvider } from './Components/Context/Context.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskProvider>
  <App />
  </TaskProvider>
    
)
