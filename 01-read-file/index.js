const fs = require('fs');
const path = require('path');
const { stdout } = process;
const stream = fs.ReadStream(path.join(__dirname, 'text.txt'));

stream.on('readable', function () {
  let data;
  if (null !== (data = stream.read())) {
    stdout.write(data.toString('utf-8'));
  }
});
// fs.readFile(path.join(__dirname, 'text.txt'), (error, data) => {
//   if (error) console.error(error.message);
//   stdout.write(`${data.toString()}`);
// })