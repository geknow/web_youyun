import axios from 'axios';
import ROUTE from './backendUrl';


// export async function files(data) {
//     // return await axios.post(ROUTE.login, data)
//     //     .then(function (response) {
//     //         return response.data;
//     //     });
// }

export async function forumFiles(data) {
    let url = ROUTE.forumFiles + `?page=${data.page}&size=${data.size}&time=${data.time}&hot=${data.hot}`;
    return await axios.get(url)
        .then(function (response) {
            return response.data;
        });
}


export async function getFileDetail(identifyCode) {
    return await axios.get(ROUTE.getFileDetail, {
        params: {
            identifycode: identifyCode
        }
    })
        .then(function (response) {
            return response.data.data;
        })
        .catch(function () {

        });
}

export async function getComments(fileId, page, size) {
    return await axios.get(ROUTE.getComments, {
        params: {
            fileId: fileId,
            page: page,
            size: size
        }
    }).then(function (response) {
        return response.data.data;
    })
        .catch(function () {

        });
}