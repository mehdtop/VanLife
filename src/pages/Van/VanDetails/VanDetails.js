import React from "react";
import "./vanDetails.css"
import { useLocation,useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from "../../../assets/Arrow 1.svg"
import { getVansId } from "../../../api";

export function loader({params}){
    return getVansId(params.id)
}
export default function VanDetails(){

    const van=useLoaderData()
    const location=useLocation()

   
    const url=location.state?.search || ""
   const type =  (url === "" || url === "?") ? "all" : van?.type || "";

    return(
        <div className="van-details-container">
            <Link to={`..${url}`} relative="path">
                <div className="back">
                <img src={arrow} alt="arrow" /><p>Back to {type} vans</p>
                </div>
            </Link>    
             <div className="van-details">
                <img src={van.imageUrl} alt="van"/>
              <div className="van-details-content">

            <p className={van.type}>{van.type}</p>
            <h2>{van.name}</h2>
           <div className="van-details-price">
            <p>{`$${van.price} `}</p>
            <p>/day</p>
           </div>
           <p className="des">
            {van.description}
           </p>
           <button>Rent this van</button></div> </div>
        </div>
    )
}