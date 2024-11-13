import React from "react"
import { NavLink , Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import icon from "../../assets/Icon.png"
import "./Nav.css"

export default function Nav(){
    const activeStyle = {
        textDecoration: "underline",
        color: "#161616",
        fontWeight:"bold"}
    return(
        <div className="nav">
        <div className="nav-logo">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
        </div>
        <div className="nav-links">
            <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null }>
                Host
            </NavLink>
            <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null }>
              About
            </NavLink>
            <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null }>
            Van
            </NavLink>
            <Link to="login">
                <img src={icon} alt="icon" className="icon"/>
            </Link>
            
        </div>
    </div>
    )

}