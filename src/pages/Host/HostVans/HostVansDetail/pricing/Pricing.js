import React from "react";
import "./pricing.css"
import { useOutletContext } from "react-router-dom";
export default function  Pricing() {
    const {price}=useOutletContext()
    return (
        <div className="pricing"> <p>{`$${price}.00`} </p><p>/day</p></div>
    )
}