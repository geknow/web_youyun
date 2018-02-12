import axios from 'axios';
import ROUTE from './backendUrl';


export async function login(data) {
    return await axios.post(ROUTE.login, data)
        .then(function (response) {
            return response.data;
        });
}

export async function autoLogin() {
    return await axios.post(ROUTE.updateToken, {
        'token': localStorage.getItem('loginToken')
    })
        .then(function (response) {
            return response.data;
        });
}