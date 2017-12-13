const client = require('./client')
const fs = require('fs');
const image = fs.readFileSync('./images/huge.jpg');
const base64Img = new Buffer(image).toString('base64');

client.detect(base64Img,{face_fields:'age,beauty'}).then(function(result){
    console.log(JSON.stringify(result));
})
