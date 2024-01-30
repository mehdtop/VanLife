import React from "react";
import "./hostVans.css"
import HostVanCard from "../../../components/HostVanCard/HostVanCard";

export default function HostVans(){
    const [list,setList]=React.useState([])
    React.useEffect(()=>{
        fetch("/host/vans")
        .then(res=>res.json())
        .then(data=>setList(data.vans))
    },[])
    const listVan=list.map(item=>{return(
            <HostVanCard {...item}/>
    )})
    return(
    <div className="Host-vans">
        <h1>Your listed vans</h1>
        {listVan}
        </div> )
}