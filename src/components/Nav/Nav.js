import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Nav.css"

export default function Nav(){
    return(
        <div className="nav">
        <div className="nav-logo">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
        </div>
        <div className="nav-links">
            <Link to="/about">
                <p>About</p>
            </Link>
            <p>Van</p>
        </div>
    </div>
    )

}