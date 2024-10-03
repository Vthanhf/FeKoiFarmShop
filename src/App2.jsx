
import Header from "./components/main/Header"

import './App.css'
import Footer from "./components/main/Footer"
import { Outlet } from "react-router-dom"

function App2() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App2
