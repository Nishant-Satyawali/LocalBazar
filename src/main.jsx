import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom" 
import Head from './Component/Head.jsx'
import Center from './Component/Center.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Head/>
    <Center/>
    </BrowserRouter>
  </StrictMode>,
)
