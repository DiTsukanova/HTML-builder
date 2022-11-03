const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

const pathOfFile = path.join(__dirname, 'text.txt');
const writeableStream = fs.createWriteStream(pathOfFile);
stdout.write('Привет! Напиши что-нибудь: \n');
stdin.on('data', data => {
  if (data.toString().toLowerCase().trim() === 'exit') {
    process.exit();
  }
  writeableStream.write(data);
  stdout.write(`Вы добавили запись: ${data}Продолжите ввод или завершите процесс!\n`);

});
process.on('exit', () => stdout.write('\nПроцесс ввода завершен! Успехов!'));
process.on('SIGINT', () => process.exit());






