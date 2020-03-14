import axios from 'axios';

const serverURL = 'http://localhost:3001';

export function register(username, password, email) {
    let headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    };
    return axios.post(`${serverURL}/register`, {
        username: username,
        password: password,
        email: email
    }, {headers: headers});
}

export function login(username, password) {
    return axios.post(`${serverURL}/login`, {
        username: username,
        password: password
    });
}