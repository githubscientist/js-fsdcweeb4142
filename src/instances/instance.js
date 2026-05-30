// import axios
import axios from "axios";

const baseURL = 'https://6a1a6c00bc2f94475492321c.mockapi.io';

// creat an instance of axios
const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default instance;