const fs = require('fs');
const path = require('path');

let writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
    if(err) {
        console.log(err)
    } else {
        files.forEach(file => {
            if (path.parse(file).ext === '.css') {
              let readStream = fs.createReadStream(path.join(__dirname, 'styles', file));
              readStream.pipe(writeStream);
            }
          });
    }
  })