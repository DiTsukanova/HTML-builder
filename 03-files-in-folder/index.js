const fs = require("fs");
const path = require("path");
const folder = path.join(__dirname, 'secret-folder')

fs.readdir(folder, (err, files) => {
    if(err) {
        console.log(err)
    }
    files.forEach(file => {
        const pathOfFile = path.join(folder, file);
        fs.stat(pathOfFile, (err, stats) => {
            if(err) {
                console.log(err)
            }
            if(stats.isFile()) {
                const ext = path.extname(pathOfFile);
                console.log(`${path.basename(pathOfFile, ext)} - ${ext.slice(1, ext.length)} - ${stats.size}b`)
            }
        })
    })
})