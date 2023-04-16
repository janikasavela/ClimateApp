import http from './httpService.js';
import config from './config.json';

 export function register(username, password) {
     return http.post(config.register, { username: username, password: password } ); 
 }
