import axios from 'axios';

const url = 'https://randomuser.me/api/';

const api=axios.create(
  {
    baseURL: 'https://randomuser.me/api/'
  }
)

export default api;