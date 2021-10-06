const workingDir = process.cwd();

const fs = require('fs');
const ParseChapter1 = require(`${workingDir}/parsers/chapter1.js`);
const ParseChapter2 = require(`${workingDir}/parsers/chapter2.js`);

const exportDir = `${workingDir}/out`;

if (!fs.existsSync(exportDir)){
    fs.mkdirSync(`${exportDir}`);
}

function ParseAllData() {
  var promises = [
    ParseChapter1(),
    ParseChapter2()
  ];

  return Promise.all(promises);
}

ParseAllData().then(function(dataArray) {
  const chapter1Data = dataArray[0];
  const chapter2Data = dataArray[1];

  fs.writeFile(`${exportDir}/Chapter1.json`,JSON.stringify(chapter1Data, null, 2),function(err){
    if(err){
      console.log(err);
    }
  });
  
  fs.writeFile(`${exportDir}/Chapter2.json`,JSON.stringify(chapter2Data, null, 2),function(err){
    if(err){
      console.log(err);
    }
  });

});