import { json } from "react-router-dom";
export async function requiredLogin(request) {

    const isLoggedIn = localStorage.getItem("loggedin");
    const pathName=new URL(request.url).pathname

    if (!isLoggedIn) {
        throw json(
            {},
            {
                status:302,
                headers: {
                    Location: `/login?message=You must log in first.&redirectTo=${pathName}`
                }
            }
        )
    }
}
