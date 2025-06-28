import axios from "axios";

const API_URL = "https://bach-backend.onrender.com/";

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
export async function loginBack(email, password) {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    // response.data debería ser tu DTORespuestaUsuario o token
    return { success: true, data: response.data };
  } catch (error) {
    console.error("❌ loginBack error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Error al iniciar sesión"
    };
  }
}

export async function registerBack(userData) {
  try {
    const response = await axiosInstance.post("/usuarios/registrar", userData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("❌ registerBack error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Error al registrar"
    };
  }
}
