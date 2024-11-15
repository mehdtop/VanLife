import React from "react";
import "./home.css"
import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div className="home">
        <div className="home-content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="/vans">
        <button >Find your van</button>
        </Link>
       
        </div>
        </div>
    )
}