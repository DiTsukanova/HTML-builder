//Выполнены задачи" 1, 2, 3, 5.Если что будет не так, пожалуйста, напиши мне :). Но вроде все 4 запускаются.

const fs = require("fs");
const path = require("path");


const pathOfFile = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(pathOfFile);

stream.pipe(process.stdout)