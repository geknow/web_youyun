const MIME_APPLICATION = 'apk';
const MIME_ZIP = 'zip';
const MIME_VIDEO = 'video';
const MIME_MUSIC = 'music';
const MIME_PICTURE = 'img';
const MIME_DOCUMENT = 'doc';
const MIME_OTHER = 'other';

let getMyMIME = (type) => {
    if (type === null)
        return MIME_OTHER;
    if (type.startsWith('image/')) {
        return MIME_PICTURE;
    }
    if (type.startsWith('audio')) {
        return MIME_MUSIC;
    }
    if (type.startsWith('video')) {
        return MIME_VIDEO;
    }
    switch (type) {
        case 'application/zip':
            return MIME_ZIP;
        case 'application/msword':
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        case 'application/vnd.ms-powerpoint':
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        case 'application/vnd.ms-excel':
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        case 'application/pdf':
        case 'text/plain':
            return MIME_DOCUMENT;
        case 'application/vnd.android.package-archive':
            return MIME_APPLICATION;
        default:
            return MIME_OTHER;
    }

};

let getDownloadLink = (identifycode) => {
    return `http://eupan.club:8080/file/checkdownload/${identifycode}`;
};
export {
    getMyMIME,
    MIME_APPLICATION,
    MIME_MUSIC,
    MIME_ZIP,
    MIME_VIDEO,
    MIME_PICTURE,
    MIME_DOCUMENT,
    MIME_OTHER,
    getDownloadLink
};