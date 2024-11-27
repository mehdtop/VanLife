import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./error.css";

export default function Error() {
    const error = useRouteError();

    // Extract error information
    const errorMessage = error?.message || "An unexpected error occurred.";
    const redirectUrl = error?.redirectUrl || "/";
    const message= error?.redirectUrl ? "go to login page by clicking the button below " :"If you want to go back home, click the button or reset the URL."
    const buttonMessage=error?.redirectUrl?"Go to login page":"Go back to Home"

    return (
        <div className="error-container">
            <div className="error-content">
                <h1>Oops</h1>
                <h2>{errorMessage}</h2>
                <p>
                    {message}
                </p>
                <Link to={redirectUrl} className="back-link">
                     {buttonMessage}
                </Link>
            </div>
        </div>
    );
}
