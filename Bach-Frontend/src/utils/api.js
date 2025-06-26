const API_URL = "http://localhost:8080/";

export async function loginBack(user) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
    });
    return response.json();
}

export async function registerBack(user) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
    });
    return response.json();
}
