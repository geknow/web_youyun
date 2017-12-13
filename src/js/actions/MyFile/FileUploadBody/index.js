const CryptoJS = require('crypto-js');
const $ = require('jquery');

export async function checkUploadFile(body) {
    return await new Promise((resolve, reject) => {
        fetch('/api/file/uploadCheck', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            resolve(data);
        });
    });
}

export async function uploadFile(file, body, dispatch) {
    return await new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append('file', file);
        Object.keys(body).forEach(key => {
            if (!!body[key])
                formData.append(key, body[key]);
        });
        // 上传进度回调函数：
        let progressHandlingFunction = (e) => {
            if (event.lengthComputable) {
                let percent = Math.floor(event.loaded / event.total * 100);
                dispatch({
                    type: 'progress',
                    data: {
                        progress: percent
                    }
                });
            }
        };
        //ajax 异步上传
        $.ajax({
            url: '/api/file/upload',
            type: 'POST',
            data: formData,
            xhr: function () { // 获取 ajaxSettings 中的 xhr 对象，为它的 upload 属性绑定 progress 事件的处理函数
                let myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) { // 检查 upload 属性是否存在
                    myXhr.upload.addEventListener('progress', progressHandlingFunction, false);
                }
                return myXhr; //xhr 对象返回给 jQuery 使用
            },
            success: function (result) {
                console.log(result);
                if (!!result['success']) {
                    resolve(result['data']);
                }
            },
            contentType: false, // 必须 false 才会自动加上正确的 Content-Type
            processData: false  // 必须 false 才会避开 jQuery 对 formdata 的默认处理
        });
    });


}

export async function getmd5({result, file}) {
    let reader = new FileReader();
    return await new Promise((resolve, reject) => {
        reader.onload = function (event) {
            let md5 = CryptoJS.MD5(result).toString();
            resolve(md5);
        };
        reader.readAsBinaryString(file);
    });
}