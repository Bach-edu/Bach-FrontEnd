import axios from "axios";

const API_URL = "http://localhost:8080";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// export async function loginBack(usuario) {
//     const response = await axiosInstance.post("/login", usuario);
//     return response.data;
// }
export const loginBack = async ({ email, password }) => {
    return await axios.post('http://localhost:8080/login', {
        email,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
};

export async function registerBack(usuario) {
    const response = await axiosInstance.post("/usuarios/registrar", usuario);
    return response.data;
}