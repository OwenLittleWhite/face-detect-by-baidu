const AipFaceClient = require('baidu-aip-sdk').face;

const APP_ID = '10525733';
const API_KEY = 'WEsU7l8vdOznwCxnvVTsw4jk';
const SECRET_KEY = 'o53Wat5NbmwrqFeLfcHRQUYjt4cRvyEX';

const client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);
module.exports = client;