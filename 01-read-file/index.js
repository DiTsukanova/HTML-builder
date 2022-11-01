const fs = require("fs");
const path = require("path");


const pathOfFile = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(pathOfFile);

stream.pipe(process.stdout)