import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Grid from './Components/Projects.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Grid />
  </React.StrictMode>,
)
