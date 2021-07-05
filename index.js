const Jimp = require('jimp');

Jimp.read('./app/bg.jpg')
    .then(image => {
        if (!isValidImage) {
            console.error('Image should be even size');
            return;
        }
        return image
            .resize(image.bitmap.width / 2, image.bitmap.height / 2) // resize
            .write('lena-small-bw.jpg'); // save
    })
    .catch(err => {
        console.error(err);
    });

const isValidImage = imageBitmap => imageBitmap.width % 2 === 0 && imageBitmap.height % 2 === 0;
