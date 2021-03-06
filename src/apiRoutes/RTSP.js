import axios from 'axios';

const serverURL = 'http://localhost:3001';

/* Get user associated RTSP urls */
export function getUserUrls() {
    let headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    };
    return axios.get(`${serverURL}/rtsp`, {headers: headers});
}

/* Insert specific RTSP url */
export function insertUserUrl(url) {
    let headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    };
    return axios.post(`${serverURL}/rtsp`, {
        url: url
    }, {headers: headers});
}