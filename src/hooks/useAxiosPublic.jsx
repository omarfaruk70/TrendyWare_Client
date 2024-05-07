import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})
const axiosPublic = () => {
    return axiosInstance
}
export default axiosPublic;