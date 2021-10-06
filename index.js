const workingDir = process.cwd();

const fs = require('fs');
const ParseChapter1 = require(`${workingDir}/parsers/chapter1.js`);
const ParseChapter2 = require(`${workingDir}/parsers/chapter2.js`);
const ParseGlobalFlags = require(`${workingDir}/parsers/globalFlags.js`);

const exportDir = `${workingDir}/out`;

if (!fs.existsSync(exportDir)){
    fs.mkdirSync(`${exportDir}`);
}

function ParseAllData() {
  var promises = [
    ParseChapter1(),
    ParseChapter2(),
    ParseGlobalFlags()
  ];

  return Promise.all(promises);
}

ParseAllData().then(function(dataArray) {
  const chapter1Data = dataArray[0];
  const chapter2Data = dataArray[1];
  const globalFlagsData = dataArray[2];

  fs.writeFile(`${exportDir}/Chapter1.json`,JSON.stringify(chapter1Data, null, 2),function(err){
    if(err){
      console.log(err);
    }else{
      console.log(`Chapter 1 file written to ${exportDir}/Chapter1.json`);
    }
  });
  
  fs.writeFile(`${exportDir}/Chapter2.json`,JSON.stringify(chapter2Data, null, 2),function(err){
    if(err){
      console.log(err);
    }else{
      console.log(`Chapter 2 file written to ${exportDir}/Chapter2.json`);
    }
  });
  
  fs.writeFile(`${exportDir}/GlobalFlags.json`,JSON.stringify(globalFlagsData, null, 2),function(err){
    if(err){
      console.log(err);
    }else{
      console.log(`Global Flags file written to ${exportDir}/GlobalFlags.json`);
    }
  });

});

//For printing a specific line of data.
function printLine(file,line){
  var filePath = `${workingDir}/out/${file}.json`;
  return fs.readFile(filePath,'utf8',function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(JSON.parse(data)[line]);
    }
  });
}

