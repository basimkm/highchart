import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7100/',
  timeout: 1000,
});

export default instance;
