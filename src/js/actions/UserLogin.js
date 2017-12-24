import axios from 'axios';

export async function login(data) {
    return await axios.post('/api/login', data)
        .then(function (response) {
            return response.data;
        });
}

export async function autoLogin() {
    return await axios.post('/api/updateToken', {
        'token': localStorage.getItem('loginToken')
    })
        .then(function (response) {
            return response.data;
        });
}