/**
 * Created by webhugo on 17-11-20.
 */
const fs = require('fs');
const path = require('path');
const {exec} = require('child_process');


let files = [];
let gf = (pathname) => {
    let filenames = fs.readdirSync(pathname).filter(file => {
        return !file.match(/node_modules|\.git|\.idea/);
    });
    filenames.forEach(file => {
        if (fs.statSync(path.resolve(pathname, file)).isDirectory()) {
            gf(path.resolve(pathname, file));
        } else if (fs.statSync(path.resolve(pathname, file)).isFile() && file.match(/\.jsx?$/)) {
            files.push(path.resolve(pathname, file));
        }
    });
};
gf(__dirname);
files.forEach(file => {
    exec(`eslint ${file} --fix`, function (err, stdout, stder) {
        if (err) {
            console.log(`err ${err}`);
        } else {
            console.log(`${file} ok`);
        }
    });
});