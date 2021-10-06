const workingDir = process.cwd();

const fs = require('fs');
const ParseChapter1 = require(`${workingDir}/parsers/chapter1.js`);

const exportDir = `${workingDir}/out`;

if (!fs.existsSync(exportDir)){
    fs.mkdirSync(`${exportDir}`);
}

function ParseAllData() {
  var promises = [
    ParseChapter1()
  ];

  return Promise.all(promises);
}

ParseAllData().then(function(dataArray) {
  const chapter1Data = dataArray[0];

  fs.writeFile(`${exportDir}/Chapter1.json`,JSON.stringify(chapter1Data, null, 2),function(err){
    if(err){
      console.log(err);
    }
  });

});