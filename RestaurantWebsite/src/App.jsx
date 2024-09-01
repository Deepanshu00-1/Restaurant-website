import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Hero from "./components/HeroSection"
// import Menu from "./components/Menu"
import Foods from './components/Foods'

function App() {
  return(
    <>
    <Header />
    <Hero />
    <Foods />
    </>
  )
}

export default App
