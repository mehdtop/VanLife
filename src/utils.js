
export async function requiredLogin() {
    const isLoggedIn = false; // Replace this with your actual login check logic

    if (!isLoggedIn) {
        // Optional: Include an error message in the redirect state
        const error = new Error("You must log in first.");
        error.status = 302; // Status code for redirection
        error.redirectUrl = "/login?message=You must log in first.";
        throw error;
    }
}
