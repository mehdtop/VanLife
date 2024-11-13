import React from "react";
import "./photo.css"
import { useOutletContext } from "react-router-dom";
export default function  Photo() {
    const {imageUrl} = useOutletContext();
    return (
        <div className="photo">
            <img src={imageUrl} alt="van" />
        </div>
    )
}