const fs = require('fs').promises;
const path = require('path');

async function copyDir() {
  const sourceDir = path.join(__dirname, 'files');
  const targetDir = path.join(__dirname, 'files-copy');
  try {
    await fs.mkdir(targetDir);
  } catch (err) {
    if (err) {
      throw err;
    }
  }
  const files = await fs.readdir(sourceDir);
  for (const file of files) {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(targetDir, file);
    await fs.copyFile(sourceFile, targetFile);
  }
}
copyDir()
  .then(() => console.log('Directory copied successfully'))
  .catch((err) => console.error(err));
