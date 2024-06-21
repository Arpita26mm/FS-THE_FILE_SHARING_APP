import axios from "axios";

const API_URL = "http://localhost:8000"; //backend url (main root url)

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, data); //upload route create krow ab in backend -> API_URL/upload
    return response.data;
  } catch (error) {
    console.log("or while calling the upload method", error.message);
  }
};
