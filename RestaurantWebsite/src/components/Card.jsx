import {useState} from 'react'


const FoodCard =(props)=>{

    // const [likeColor, setLikeColor] = useState('black')
    const [click, setClick] = useState(false);

    const changeColor = ()=>{
        setClick(!click)
    }

    return(
        <div className="card">
            <div className="img">
                <img src={props.Img} alt="" />
            </div>
            <div className="info">
                <h1>{props.foodName}</h1>
                <p>{props.foodInfo}</p>
            </div>
            <div className="access">
                <div className="like" onClick ={changeColor} style = {{color: click ? 'crimson':'black'}} title='Add to favourites'>
                <i class="fa-regular fa-heart"></i>
                </div>
                <button>{props.Btn}</button>
            </div>
        </div>
    )
}
export default FoodCard