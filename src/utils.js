import { redirect } from "react-router-dom";
export async function requiredLogin(){
    const isLoggin=false
    if(!isLoggin){
       return redirect("/login?message=You should  login first")
    }
}