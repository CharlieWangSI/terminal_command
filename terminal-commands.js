const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile(file,data,(err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })
};

module.exports.mkdir = () => {
  fs.mkdir('./',(err)=>{
    if (err) throw err;
    console.log('The directory has been created!');
  })
};
