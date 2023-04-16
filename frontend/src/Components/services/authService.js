import http from './httpService.js';
import config from './config.json';

export function login(username, password) {
    return http.post(config.login, { username, password });
};