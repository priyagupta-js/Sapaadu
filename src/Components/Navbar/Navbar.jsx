import React from "react";
import "./Navbar.css";
// import Image from "./Logo/Image/Image";
// import Text from "./Logo/Text/Text";
import Logo from "../Navbar/Logo/Logo"
import { IoCart } from "react-icons/io5";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navleft">
                {/* <Image />
                <Text /> */}
                <Logo />
                
            </div>
            <div className="naright">
                <div className="cart-container"><Link to="/cart"><IoCart className="cart-icon"/></Link></div>
            </div>
        </div>
    );
}
export default Navbar;