import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE;


export const createOrder = (orderData) => {
    return axios.post(`${API_BASE_URL}/api/orders`, orderData);
};

