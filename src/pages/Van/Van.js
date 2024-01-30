import React from "react";
import "./van.css"
import Card from "../../components/cards/Card";
export default function Van(){
    const [vans,setVans]=React.useState([])
    
    React.useEffect(()=>{
        fetch("/api/vans")
        .then((response) => response.json())
        .then((data) =>setVans(data.vans))}
    ,[])
   const van=vans.map((item)=>{return(<Card key={item.id} {...item} />)})
   
    return(
        <div className="van">
            <h1>Explore our van options</h1>
            <div className="van-filter">
                <button className="simple" >Simple</button>
                <button className="luxury">Luxury</button>
                <button className="rugged">Rugged</button>
                <button >Clear filters</button>
            </div>
            <div className="van-cards">
                {van}
            </div>
        </div>
    )
}