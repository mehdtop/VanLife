import React from "react";
import "./details.css"
import { useOutletContext } from "react-router-dom";
export default function  Details() {
    const  context = useOutletContext();
    return (
        <div className="details">
            <p><strong>Name:</strong> {context.name} </p>
            <p><strong>Categorie:</strong> {context.type} </p>
            <p><strong>Description:</strong> {context.description} </p>
            <p><strong>Visibility:</strong> Public</p>
        </div>
    )
}