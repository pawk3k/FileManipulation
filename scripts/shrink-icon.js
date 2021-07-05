const path = require('path');
const fs = require('fs');

const { inputPathConfig, outputPathConfig, ignorePathConfig } = require('./.shrink-config');
const sharp = require('sharp');

const isValidImage = (width, height) => width % 2 === 0 && height % 2 === 0;

const INPUT_PATH = path.join(__dirname, `../${inputPathConfig}`);
const OUTPUT_PATH = path.join(__dirname, `../${outputPathConfig}`);

const ignoredPathArray = [];
console.log(ignorePathConfig);

ignorePathConfig.forEach(dirPath => ignoredPathArray.push(path.join(__dirname, `../${dirPath}`)));

console.log(ignoredPathArray);

// /** Resizing one image
//  * @param  {string} fileName
//  */
// function resizeImage(inputPath, outputPath) {
//     const image = sharp(inputPath);
//     image.metadata().then(metadata => {
//         console.log(metadata.width);
//         if (!isValidImage(metadata.width, metadata.height)) {
//             console.error('\x1b[31m', 'Image dimensions should be even: ', inputPath);
//             return;
//         }
//         return image
//             .resize(Math.round(metadata.width / 2))
//             .toFile(outputPath)
//             .then(newFileInfo => {
//                 console.log('Success');
//             });
//     });
// }

// /**
//  * Look ma, it's cp -R.
//  * @param {string} src  The path to the thing to copy.
//  * @param {string} dest The path to the new copy.
//  */
// var copyRecursiveSync = function (src, dest) {
//     var exists = fs.existsSync(src);
//     var stats = exists && fs.statSync(src);
//     var isDirectory = exists && stats.isDirectory();
//     if (isDirectory) {
//         fs.mkdirSync(dest);
//         fs.readdirSync(src).forEach(function (childItemName) {
//             copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
//         });
//     } else {
//         const replaced = dest.replace(/shrinked/, 'normal');
//         resizeImage(replaced, dest);
//     }
// };

// fs.rmdirSync(OUTPUT_PATH, { recursive: true });
// copyRecursiveSync(INPUT_PATH, OUTPUT_PATH);
