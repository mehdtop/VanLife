import React from "react";
import "./hostVanCard.css"
import { Link } from "react-router-dom";

export default function HostVanCard(props) {
    return(
        <Link to={`/host/vans/${props.id}`} >
        <div className="host-van-card">
            <img src={props.imageUrl} alt="van" />
            <div className="host-van-card-content">
                <h2>{props.name}</h2>
                <p>{props.price}/days</p>
            </div>
        </div>
        </Link>
    )
}