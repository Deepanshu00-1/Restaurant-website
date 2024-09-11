import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function NewNav(){
    const count = useSelector((state)=> state.counter.value)
    return(
        <>
        <h1>{`New Count: ${count}`}</h1>
        </>
    )
}
export default NewNav