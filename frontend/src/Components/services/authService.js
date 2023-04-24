import http from './httpService.js';
import config from './config.json';

export function login(username, password) {
    return http.post(config.login, { username, password });
};

export function register(username, password) {
    return http.post(config.register, { username: username, password: password } ); 
}

export function deleteUser(user) {
    return  http.delete(config.profile + user);
}

export function getChart(path) {
    return http.get(config.chart + path);
}

export function addView(data) {
    return http.post(config.view, data, {
        headers: {
            'Content-Type': 'application/json',
          }}
        );
}