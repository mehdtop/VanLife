import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css"

export default function NotFound(){
    return(
        <div className="not-found">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="..">Return to home</Link>
        </div>
    )
}