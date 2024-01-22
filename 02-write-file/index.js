const fs = require('fs');
const { stdin, stdout } = process;
const path = require('path');

fs.writeFile(path.join(__dirname, 'text.txt'), '', (error) => {
  if (error) console.error(error.message);
});

stdout.write('>Please, enter your text \n');
stdin.on('data', (data) => {
  const text = data.toString();
  if (text.includes('exit')) {
    process.exit();
  } else {
    fs.appendFile(path.join(__dirname, 'text.txt'), text, (error) => {
      if (error) console.error(error.message);
      console.log('>Text file created');
  }
});

process.on('exit', () => {
  stdout.write('GoodBye!');
});
process.on('SIGINT', () => {
  process.exit();
});