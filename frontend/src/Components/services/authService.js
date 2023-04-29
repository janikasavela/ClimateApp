import http from './httpService.js';
import config from './config.json';

export function login(username, password) {
    return http.post(config.login, { username, password });
};

export function register(username, password) {
    return http.post(config.register, { username: username, password: password } ); 
}

export function deleteUser(user) {
    const token = "Bearer " + localStorage.getItem('token');
    return  http.delete(config.profile + user, {
        headers: {
            'Authorization': token
          }}
        );
}

export function deleteView(url) {
    const token = "Bearer " + localStorage.getItem('token');
    return http.delete(config.viewuser + url, {
        headers: {
            'Authorization': token
          }}
        );
}

export function getChart(path) {
    return http.get(config.chart + path);
}

export function addView(data) {
    const token = "Bearer " + localStorage.getItem('token');
    return http.post(config.view, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }}
        );
}

export function getCustom(path) {

    return http.get(config.custom + path);

}

export function getViews(user) {
    const token = "Bearer " + localStorage.getItem('token');
    return http.get(config.viewuser + user, {
        headers: {
            'Authorization': token
          }}
        );
}

export function getUrl(url) {
    const token = "Bearer " + localStorage.getItem('token');
    return http.get(config.getUrl + url, {
        headers: {
            'Authorization': token
          }}
        );
}