import React from "react";
import "./photo.css"
import { useOutletContext } from "react-router-dom";
export default function  Photo() {
    const context = useOutletContext();
    return (
        <div className="photo">
            <img src={context.imageUrl} alt="van" />
        </div>
    )
}