import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css"

export default function NotFound(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <div className="not-found-button" >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
            <Link to="/login">Login</Link>
            </div>
        </div>
    )
}