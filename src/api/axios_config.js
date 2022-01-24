import axios from 'axios';

export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'c00b7690-d0c3-4e1e-8302-e3ab3c8dd373'
   }
});
