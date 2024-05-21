import React, { useState } from 'react'
import "./Navbar.css"


import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
const [menu,setMenu] = useState("Shop")

    return (
        <div className='navbar'>
            <div className="nav_logo">
            <Link to="/" style={{textDecoration:"none"}}><img src={logo} alt="" /></Link>
                <Link to="/" style={{textDecoration:"none"}}><p>SHOPPER</p></Link>
                
            </div>
            <ul className="nav_menu">
                <li onClick={()=>{setMenu("Shop")}}><Link to="/" style={{textDecoration:"none"}}>Shop </Link> {menu==="Shop"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Men")}}> <Link to="/mens" style={{textDecoration:"none"}}>Men</Link> {menu==="Men"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Women")}}><Link to="/womens" style={{textDecoration:"none"}}>Women</Link> {menu==="Women"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link> {menu==="Kids"?<hr/>:null}</li>
            </ul>
            <div className="nav_login_cart">
                <Link to="/login" style={{textDecoration:"none"}}><button>Login</button></Link>
                <Link to="/cart" style={{textDecoration:"none"}}><img src={cart_icon} alt="" /></Link>
                <div className="nav_cart_count">0</div>
            </div>
        </div>
    )
}

export default Navbar
