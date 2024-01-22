
const fsPromises = require('fs/promises');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fsPromises
  .readdir(folderPath)
  .then((files) => {
    files.forEach(async (file)=> {
      const filePath = path.join(folderPath, file);
      const fileStat = await fsPromises.stat(filePath);
      if (fileStat.isFile()) {
        const extension = path.extname(file);
        const name = path.basename(file, extension);
        const sizeInKB = Math.round(fileStat.size / 1024);
        console.log({ name, extension, sizeInKB });
      }
    });
  })
  .catch((err) => console.error(err));