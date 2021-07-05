const Jimp = require('jimp');

const path = require('path');
const fs = require('fs');

const isValidImage = imageBitmap => imageBitmap.width % 2 === 0 && imageBitmap.height % 2 === 0;

const inputPath = path.join(__dirname, '../assets/normal');

const INPUT_PATH = path.join(__dirname, '../assets/normal');
const OUTPUT_PATH = path.join(__dirname, '../assets/shrinked');
/** Resizing one image
 * @param  {string} fileName
 */
function resizeImage(inputPath, outputPath) {
    Jimp.read(inputPath)
        .then(image => {
            if (!isValidImage(image.bitmap)) {
                console.error('\x1b[31m', 'Image dimensions should be even: ', inputPath);
                process.exit(1);

                // return;
            }
            return image
                .resize(image.bitmap.width / 2, image.bitmap.height / 2) // resize
                .write(outputPath); // save
        })
        .catch(error => {
            console.error(error);
        });
}
// remove browserify
// presist structure
//remove before
// rebuild script when structure changed
// config
// force when something not even
// fs.readdir(DIRECTORY_PATH, (err, files) => {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     files.forEach(file => {
//         resizeImage(file);
//     });
// });

/**
 * Look ma, it's cp -R.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
var copyRecursiveSync = function (src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        const replaced = dest.replace(/shrinked/, 'normal');
        resizeImage(replaced, dest);
    }
};

fs.rmdirSync(OUTPUT_PATH, { recursive: true });
copyRecursiveSync(INPUT_PATH, OUTPUT_PATH);
