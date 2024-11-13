import React from "react";
import aboutImage from "../../assets/about.png"
import "./about.css"
import { Link } from "react-router-dom"
export default function About(){
    return(
        <div className="about">
        <div className="about-image">
            <img src={aboutImage} alt="van"/>
        </div>
        <div className="about-content">
            <h1>
            Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)
            <br/><br/>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
          
        </div>
        <div className="about-container">
        <div className="about-action">
                <h2> Your destination is waiting.Your van is ready.</h2>
                <Link to="/vans">
                <button>Explore our vans</button>
                </Link>
                
            </div>
        </div>
        
        </div>
    )
}