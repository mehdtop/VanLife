import React from "react";
import "./van.css"
import Card from "../../components/cards/Card";
import { useSearchParams , useLoaderData } from "react-router-dom";
import { GetVans } from "../../api";

export function loader(){
    return GetVans()
}
export default function Van(){
    const vans=useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter=searchParams.get("type")

    function handleChange(key,value){
     setSearchParams(prevParams=>{
         if(value===null){
             prevParams.delete(key)
         }else{
             prevParams.set(key,value)
         }
         return prevParams
     })
    }
    const displayed=typeFilter? vans.filter(item=>item.type===typeFilter):vans
    const van=displayed.map((item)=>{return(<Card key={item.id} {...item} search={searchParams.toString()} />)})

    return(
        <div className="van">
            <h1>Explore our van options</h1>
            <div className="van-filter">
                <button className={typeFilter==="simple"?"simple selected":"simple"}  onClick={()=>handleChange("type","simple")}  >Simple</button>
                <button className={typeFilter==="luxury"?"luxury selected":"luxury"} onClick={()=>handleChange("type","luxury")} >Luxury</button>
                <button className={typeFilter==="rugged"?"rugged selected":"rugged"} onClick={()=> handleChange("type","rugged")} >Rugged</button>
                {typeFilter && <button className="clear" onClick={()=>handleChange("type",null)} >Clear filters</button>}
            </div>
            <div className="van-cards">
                {van}
            </div>
        </div>
    )
}