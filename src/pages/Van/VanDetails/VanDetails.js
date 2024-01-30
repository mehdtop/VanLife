import React from "react";
import "./vanDetails.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from "../../../assets/Arrow 1.svg"
export default function VanDetails(){
    const param=useParams()
    const [van,setVan]=React.useState(null)

    React.useEffect(()=>{
    fetch(`/api/vans/${param.id}`)
    .then(res=>res.json())
    .then(data=>setVan(data.vans))
    .catch(error => console.error("Error fetching data:", error))}
    ,[param.id])
    return(
        <div className="van-details-container">
            <Link to="./..">
                <div className="back">
                <img src={arrow} alt="arrow" /><p>Back to all vans</p>
                </div>
            </Link>    
            {van?( <div className="van-details">
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
       ): <h2>Loading....</h2>}
        </div>
    )
}