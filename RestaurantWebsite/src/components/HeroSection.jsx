import {useState} from 'react'
import "../css/HeroSection.css"

function Hero(){
    const [menuVisible, setMenuVisible] = useState('none');
    const onSubmit = ()=>{
        setMenuVisible('none');
    }

    const onSubmit2 =()=>{
        setMenuVisible('flex');
    }

    const customClass = {
        display: menuVisible,
    }
    // const customClass2 = {
    //     display: menuVisible,
    //     position: 'absolute',
    //     zIndex: '1001',
    //     backgroundColor: '#383d52',
    //     width: '32vw',
    //     height: '100vh',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     left: '34%',
    //     top: '0',
    // }


    return (
        <>
        <div className="hero-section">
            <h1>Welcome to <b>FoodieFront</b></h1>
            <p><b>Where</b></p>
            <h3 data-text = "Delicious Moments Await"></h3>
            <button className="button1" onClick={onSubmit2}>View Full Menu</button>
            <button className="button2">Book a Table</button>
        </div>
        <div className="menu" style={customClass}>
            <button onClick = {onSubmit}><i className="fa-solid fa-xmark" ></i></button>
        </div>
        {/* <div className="responsiveMenu" style={customClass2}>
            <button onClick = {onSubmit}><i className="fa-solid fa-xmark" ></i></button>
        </div> */}
        </>
    )
}
export default Hero