module.exports = { openImage };

const exec = require('child_process').exec;
const main = require('./main.js');

/**
 * Opens the image
 */

function openImage() {
    if (process.platform === 'win32') {
        exec('1.jpeg');
    } else if (process.platform === 'linux') {
        exec('xdg-open 1.jpeg');
    } else if (process.platform === 'darwin') {
        exec('open 1.jpeg');
    } else if (process.platform === 'android') {
        exec('xdg-open 1.jpeg');
    }
}

let args = process.argv.slice(2);

main.cv(args, null);
