import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SaveComponent from './components/SavingData'
import DisplayComponent from './components/RetreivingData'

function App(){
  return(
    <>
    <SaveComponent />
    <DisplayComponent />
    </>
  )
}

export default App
