const workingDir = process.cwd();
const ParseChapter1 = require(`${workingDir}/parsers/global/chapter1.js`);
const ParseChapter2 = require(`${workingDir}/parsers/global/chapter2.js`);

var flagArray = new Array(1000);

function SetFlags(){
  for(var i = 0; i < flagArray.length; i++){
    if(flagArray[i] == null){
      flagArray[i] = {
        title: `flag[${i}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `flag[${i}]`
      }
    }else{
      flagArray[i].var = `flag[${i}]`;
      if(flagArray[i].description == null){
        flagArray[i].description = ``;
      }
    }
  }
}

function ParseGlobalFlags(){
  return new Promise((resolve,reject)=>{
    
    SetFlags();
    ParseChapter1(flagArray).then(updatedArray => {
      
      return ParseChapter2(updatedArray);
      
    }).then(updatedArray => {
      
      resolve(updatedArray);
    }).catch(err => {
      reject(err);
    });
    
  });
}

module.exports = ParseGlobalFlags;