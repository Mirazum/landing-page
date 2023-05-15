import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'


function App() {


  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
     
      
    </>
  )
}

export default App
