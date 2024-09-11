import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import NewNav from './NewNav'

function Navbar(){
    const count = useSelector((state)=> state.counter.value)
    return(
        <>
        <NewNav />
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Shop</h2>
        <h1>{`Here some increament too ${count}`}</h1>
        </>
    )
}
export default Navbar