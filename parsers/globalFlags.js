var flagArray = new Array(1000);

function SetFlags(){
  for(var i = 0; i < flagArray.length; i++){
    if(flagArray[i] == null){
      flagArray[i] = {
        title: `Global Flag ${i}`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `flag[${i}]`
      }
    }else{
      flagArray[i].var = `flag[${i}]`;
    }

  }
}

function ParseFlags(){
  
  flagArray[11] = {
    title: `Auto Run`,
    description: ``,
    toggle:{
      off: 0,
      on: 1
    },
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function ParseGlobalFlags(){
  return new Promise((resolve,reject)=>{
    ParseFlags();
    SetFlags();
    
    
    resolve(flagArray);
  });
}

module.exports = ParseGlobalFlags;