import { useState } from 'react'
import Buildings from './components/Buildings'
import Home from './components/Home'
import Resources from './components/Resources'
import RentSoldiers from './components/RentSoldiers'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Buildings />
      <Resources />
      <RentSoldiers />
      <Login />
    </>
  )
}

export default App
