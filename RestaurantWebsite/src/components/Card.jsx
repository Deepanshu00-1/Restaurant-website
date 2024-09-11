import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement,increment } from '../Redux/counter/counterSlice';

// export const increamentContext = createContext();


const FoodCard =(props)=>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();


    const [click, setClick] = useState(false);

    const changeColor = ()=>{
        setClick(!click)
    }

    // const [increament, setIncreament] = useState();

    // const addToCart=()=>{
    //     // setAddItem(true)
    //     setAddItem(addItem+1)
    //     localStorage.setItem('Item', addItem)
    // }

    return(
        <>
        <div className="card">
            <div className="img">
                <img src={props.Img} alt="" />
            </div>
            <div className="info">
                <h1>{props.foodName}</h1>
                <a href=""><p>{props.foodInfo}</p></a>
            </div>
            <div className="access">
                <div className="like" onClick ={changeColor} style = {{color: click ? 'crimson':'black'}} title='Add to favourites'>
                <i className="fa-regular fa-heart"></i>
                </div>
                <button onClick={()=>dispatch(increment())}>{props.Btn}</button>
                {/* <increamentContext.Provider value ={increament}>
                    <AddToCart increament = {increament+1}/>
                </increamentContext.Provider> */}
            </div>
        </div>
        </>
    )
}

export default FoodCard

