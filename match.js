const client = require('./client')
var fs = require('fs');
var image1 = fs.readFileSync('./images/lyf2.jpeg');
var image2 = fs.readFileSync('./images/lyf.jpg');
var base64Img1 = new Buffer(image1).toString('base64');
var base64Img2 = new Buffer(image2).toString('base64');

client.match([base64Img1, base64Img2]).then(function(result) {
    console.log(JSON.stringify(result));
});