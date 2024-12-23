import React from "react";
import "./hostVans.css"
import HostVanCard from "../../../components/HostVanCard/HostVanCard";
import { getHostVans } from "../../../api";
import { useLoaderData } from "react-router-dom";
import { requiredLogin } from "../../../utils";

export async function loader({request}){
   
    await requiredLogin(request)
    return getHostVans()
}

export default function HostVans(){
    const list=useLoaderData()
    

    const listVan=list.map(item=>{return(
        <HostVanCard key={item.id} {...item}/>
    )})
    return(
    <div className="host-vans">
        <h1>Your listed vans</h1>
        {listVan}
        </div> )
}