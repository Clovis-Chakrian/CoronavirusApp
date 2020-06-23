import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coronavirus-19-api.herokuapp.com/countries',
});

export default api;