const AipFaceClient = require('baidu-aip-sdk').face;
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

const client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);
module.exports = client;
