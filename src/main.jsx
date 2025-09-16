import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom" 
import Vendors from './Component/Vendors.jsx'
import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom"
import Register from './Component/Register.jsx'
import Cart from './Component/Cart.jsx'
import App from './App.jsx'
import Center from './Component/Center.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Center/>}/>
      <Route path="/vendors" element={<Vendors/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      {/* url se id leke ui ko bhjete h {check User commponent} */}
      {/* <Route path="User/:userid" element={<User/>}/>
      <Route path="github" element={<Gituu/>}/> */}
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <App />
    <Head/>
    <Center/>
    <Vendors/>
    </BrowserRouter> */}

    <RouterProvider router={router}/>
  </StrictMode>,
)
