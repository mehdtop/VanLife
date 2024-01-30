import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./hostLayout.css"

export default function HostLayout(){
    const activeStyle = {
        textDecoration: "underline",
        color:" #161616",
        fontWeight: 700,
      }
    return(
        <>
        <div className="host-nav">
            <NavLink style={({isActive}) => isActive ? activeStyle : null } to="/host" end >Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null } to="/host/income">Income</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null } to="/host/vans" >Van</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null } to="/host/review">Review</NavLink>

        </div>
        <Outlet/>
        </>    
    )
}