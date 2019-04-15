import axios from 'axios';

const api = axios.create({
    baseURL: 'https://node-roger-backend.herokuapp.com',
});

export default api;