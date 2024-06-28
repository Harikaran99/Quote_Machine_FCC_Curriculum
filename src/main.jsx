import React from 'react'
import ParticleBackground from './components/particleBackground/particleBackground.jsx'
import ReactDOM from 'react-dom'
import { StyledEngineProvider } from '@mui/material'
import App from './App.jsx'
import './index.scss'


const container = document.getElementById("root")

ReactDOM.render(
  <React.StrictMode>
    <ParticleBackground/>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,container
)
