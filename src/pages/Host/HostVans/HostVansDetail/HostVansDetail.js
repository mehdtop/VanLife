import React from "react";
import "./hostVansDetail.css"
import { useLoaderData,NavLink,Link } from "react-router-dom";
import arrow from "../../../../assets/Arrow 1.svg"
import { Outlet } from "react-router-dom";
import { getListVansDetail } from "../../../../api";
import { requiredLogin } from "../../../../utils";


export async function loader({params}){
    await requiredLogin()
    return getListVansDetail(params.id)
}
export default function HostVansDetail(){
    const vanDetail=useLoaderData()

    const activeStyle = {
        textDecoration: "underline",
        color:" #161616",
        fontWeight: 700,
      }
    return(
        <div className="host-vans-detail">
            <Link to='./..' >
        <div className="back">
            <img src={arrow} alt="arrow" /><p>Back to all vans</p>
        </div></Link>

            <div className="host-vans-detail-container">
                <div className="host-vans-detail-header">
                    <img src={vanDetail.imageUrl} alt="van"/>
                    <div className="host-vans-detail-header-title">
                        <button className={`button-${vanDetail.type}`}  >{vanDetail.type}</button>
                <h2>{vanDetail.name}</h2>
                        <div className="van-details-price">
                            <p>{`$${vanDetail.price} `}</p>
                            <p>/day</p>
                        </div>
                    </div>
                </div>
                <div className="host-vans-detail-nav">
                    <NavLink to="." end style={({isActive})=> isActive? activeStyle:null}>Details</NavLink>
                    <NavLink to="pricing" style={({isActive})=> isActive? activeStyle:null}>Pricing</NavLink>
                    <NavLink to="photos" style={({isActive})=> isActive? activeStyle:null}>Photos</NavLink>
                </div>
                <Outlet context={vanDetail}/>
            </div>
    
            </div>
    )
}