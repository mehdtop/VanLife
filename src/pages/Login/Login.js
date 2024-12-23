import React from "react";
import "./login.css"
import { useLoaderData ,
    Form ,
    useActionData,
    useNavigation,
    json
    } from "react-router-dom";
import { loginUser } from "../../api";

export async function action({request}){
    const formData= await request.formData()
    const email=formData.get("email")
    const password=formData.get("password")
    const pathname=new URL(request.url).searchParams.get("redirectTo") || "/host"
    try{
        await loginUser({email,password})
        return json(
            {},
            {
                status: 302,
                headers:{
                    location:pathname
                }
            }
        )
    }catch(error){
        return error.message
    }
}

export function loader({request}){
        const message=new URL(request.url).searchParams.get("message")
        return message
}
export default function Login(){
    const message=useLoaderData()
    const errorMessage=useActionData()
    const navigation=useNavigation().state
    
    

    return(
        <div className="login">
            <h1>Sign in to your account</h1>
            {message && <h2 className="red">{message}</h2>}
            {errorMessage && <h2 className="red">{errorMessage}</h2>}
            <Form method="post" replace>
                <input  type="email"
                        name="email"
                        placeholder="Email"
                        />
                <input  type="password"
                        name="password"
                        placeholder="Password"
                        />
                    <button disabled={navigation === "submitting"}>
                       {navigation === "submitting" ? "logging in ... ":"Log in"} 
                        </button>
            </Form>
        </div>
    )
}