import axios from 'axios';
import { getTokenAndDataFromLocalStorage } from './localStorage/localStorage';

const response = getTokenAndDataFromLocalStorage();
const token = response?.token;
const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
