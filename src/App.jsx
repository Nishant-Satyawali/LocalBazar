
import "./App.css"
import Center from "./Component/Center.jsx"
import Head from "./Component/Head.jsx"
import { Outlet } from "react-router-dom"
function App() {


  return (
    <>
    <Head/>
    <Outlet/>
    </>
  )
}

export default App
