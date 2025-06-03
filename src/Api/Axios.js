import Axios from 'axios';
const axiosInstance = Axios.create({
    baseURL: ' https://amazonbackend-jn4i.onrender.com/', // API URL
});

export default axiosInstance;