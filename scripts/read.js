// const { resolve } = require('path');
// const { readdir } = require('fs').promises;

const path = require('path');
const fs = require('fs');
const INPUT_PATH = path.join(__dirname, '../assets/normal');
const OUTPUT_PATH = path.join(__dirname, '../assets/shrinked');

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
//         fs.copyFileSync(src, dest);
//     }
// };

// async function getFiles(dir) {
//     const directs = await readdir(dir, { withFileTypes: true });
//     console.log(directs);
//     const files = await Promise.all(
//         directs.map(dirent => {
//             const res = resolve(dir, dirent.name);
//             if (dirent.isDirectory()) {
//                 return getFiles(res);
//             }
//             return res;
//             // return dirent.isDirectory() ? getFiles(res) : res;
//         })
//     );
//     return Array.prototype.concat(...files);
// }

// // async function f() {
// //     // await getFiles(DIRECTORY_PATH);
// //     console.log(await getFiles(INPUT_PATH));
// // }
// // f();
// copyRecursiveSync(INPUT_PATH, OUTPUT_PATH);
const sharp = require('sharp');

sharp(`${INPUT_PATH}/correct.jpg`)
    .resize({ height: 1560, width: 1600 })
    .toFile(`${OUTPUT_PATH}/kek.jpg`)
    .then(function (newFileInfo) {
        console.log('Success');
    })
    .catch(function (err) {
        console.log('Error occured');
    });
