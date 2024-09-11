import {useState} from "react"
import Navbar from "./Navbar"
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, multiply } from "./redux/counter/counterSlice"

import './App.css'

function App(){

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  return(
    <>
    <Navbar/>
    <button onClick={()=>dispatch(increment())}>press for increament</button>
    <h1>{`Currently count is ${count}`}</h1>
    <button onClick={()=>dispatch(decrement())}>press for decrement</button>
    </>
  )
}

export default App
