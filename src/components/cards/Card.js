import React from "react";
import "./card.css"
import { Link } from "react-router-dom";
export default function Card(props){
    return (
        <Link to={props.id} state={{search:`?${props.search}`}}
        aria-label={`View details for ${props.name}, 
        priced at $${props.price} per day`}>
        <div className="card">
            <div className="card-img">
            <img src={props.imageUrl} alt="van"/>
            </div>
            <div className="card-content">
                <h2>{props.name}</h2>
                <div className="card-content-price">
                    <p>{props.price}</p>
                    <p>/day</p>
                </div>
            </div>
            <div className="card-button">
                <button className={`button-${props.type}`} type="button" >{props.type} </button>
            </div>
        </div>
        </Link>
    )
}