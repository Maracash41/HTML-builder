const fs = require('fs');
const path = require('path');
const stylesDirectory = path.join(__dirname, 'styles');
const distDirectory = path.join(__dirname, 'project-dist');
const outputFile = path.join(distDirectory, 'bundle.css');
function isCSSFile(filename) {
  return path.extname(filename) === '.css';
}
let cssContent = '';
fs.readdir(stylesDirectory, (error, files) => {
  if (error) {
    console.error(error);
    return;
  }
  files.forEach((file) => {
    if (isCSSFile(file)) {
      const filePath = path.join(stylesDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      cssContent += fileContent;
    }
  });
  fs.writeFile(outputFile, cssContent, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`File ${outputFile} has been successfully created!`);
  });
});
