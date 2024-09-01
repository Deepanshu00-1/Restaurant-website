import Logo from "../assets/restaurantLogo.png"
// #FFB41D
// #061E5C
import React, { useState } from 'react';


function Header(){

    const [responsiveNav, setResponsiveNav] = useState('none')

    const customClass = {
        display: responsiveNav,
    }

    const openNav = ()=>{
        setResponsiveNav('flex');
    }
    const closeNav = ()=>{
        setResponsiveNav('none');
    }

    return(
        <>
        <header>
            <div className="nav-part1">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-part2">
                <h3>Home</h3>
                {/* <h3>About Us</h3> */}
                <h3>Menu</h3>
                <h3 className = "pagesNav"  >Pages</h3>
                <i class="fa-solid fa-cart-shopping"></i>
                <div className="cartNotification">6</div>
            </div>
            {/* <input type="checkbox" id="mycheckbox2"></input> */}
            {/* <div className="pagesList">
                <ul>About us</ul>
                <ul>Our Chefs</ul>
                <ul>Contact Us</ul>
                <ul>Table Reservation</ul>
            </div> */}
            <div className="nav-part3">
                <div className="searchIcon">
                    <input type="text" name="search" placeholder="Search..."/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="loginBtn">
                    <button>Login</button>
                    <i className="fa-solid fa-bars" onClick ={openNav}></i>
                </div>
            </div>
        </header>
        <div className="responsiveNav" style={customClass}>
            <i className="fa-solid fa-arrow-right" id="closeIcon" onClick={closeNav}></i>
            <div className="nav1">
            <h3>Home</h3>
            <h3>Menu</h3>
            <h3 className="contact">Contact</h3>
            </div>
            <div className="nav2">
                <button>Login</button>
                <div></div>
                <button>Sign up</button>
            </div>
        </div>
        </>
    )
}
export default Header