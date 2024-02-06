// Error.js
import React from "react";
import { Link,useRouteError } from "react-router-dom";
import "./error.css";


export default function Error() {
    const error=useRouteError()
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oooooops Error</h1>
        <h2>{error} </h2>
        <p>
          So if you want to go back home click the button , or reset the url
          <strong><br></br>i'm so so so sorry,and thanks for you kindness</strong>
        
        </p>
        <Link to="/" className="back-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
