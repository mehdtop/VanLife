import React from "react";
import "./login.css"
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../../api";

export function loader({request}){
        const url=new URL(request.url).searchParams.get("message")
        return url
}
export default function Login(){
    const message=useLoaderData()
    const [loginFormData,setLoginFormData]=React.useState({})
    function handleChange(e){
        setLoginFormData(prevState=>({
            ...prevState,
           [ e.target.name]:e.target.value
        }))
        
    }
    function handeSubmit(e){
        e.preventDefault()
        loginUser(loginFormData)
        .then(data => console.log(data))
    }

    return(
        <div className="login">
            <h1>Sign in to your account</h1>
            {message && <h2 className="red">{message}</h2>}
            <form onSubmit={handeSubmit}>
                <input  type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={loginFormData.email}
                        />
                <input  type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={loginFormData.password}
                        />
                    <button>Log in</button>
            </form>
        </div>
    )
}