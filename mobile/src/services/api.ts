import axios from 'axios';

const api = axios.create({
  baseURL: 'http://168.227.16.176:3333',
});

export default api;
