import React from "react";
import "./Navbar.css";
// import Image from "./Logo/Image/Image";
// import Text from "./Logo/Text/Text";
import Logo from "../Navbar/Logo/Logo"
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navleft">
                {/* <Image />
                <Text /> */}
                <Logo />
                
            </div>
            <div className="navright">
            <div className="searchBar-container">
                <input type="text" className="search-bar" placeholder="search ..."/>
            </div>
                <Link to="/cart"><IoCart className="cart-icon"/></Link>
                <Link to ="/account"><FaUser className="acct-icon"/></Link>
            </div>
        </div>
    );
}
export default Navbar;