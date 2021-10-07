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
      if(flagArray[i].description == null){
        flagArray[i].description = ``;
      }
    }
  }
}

function ParseFlags(){
  
  flagArray[11] = {
    title: `Auto Run`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[34] = {
    title: `Party X Action Learned`,
    description: `Whether your party members can ACT`,
    toggle:{
      off: 0,
      on: 1
    }
  }
}

function ParseThrashMachine(){
  flagArray[220] = {
    title: `Thrash Machine Head`,
    dropdown:[
      {
        "id": 0,
        "title": "Laser",
        "description": ""
      },
      {
        "id": 1,
        "title": "Sword",
        "description": ""
      },
      {
        "id": 2,
        "title": "Flame",
        "description": ""
      },
      {
        "id": 3,
        "title": "Duck",
        "description": ""
      }
    ]
  }
  
  flagArray[221] = {
    title: `Thrash Machine Body`,
    dropdown:[
      {
        "id": 0,
        "title": "Plain",
        "description": ""
      },
      {
        "id": 1,
        "title": "Wheel",
        "description": ""
      },
      {
        "id": 2,
        "title": "Tank",
        "description": ""
      },
      {
        "id": 3,
        "title": "Duck",
        "description": ""
      }
    ]
  }
  
  flagArray[222] = {
    title: `Thrash Machine Feet`,
    dropdown:[
      {
        "id": 0,
        "title": "Sneak",
        "description": ""
      },
      {
        "id": 1,
        "title": "A.whl",
        "description": ""
      },
      {
        "id": 2,
        "title": "Tread",
        "description": ""
      },
      {
        "id": 3,
        "title": "Duck",
        "description": ""
      }
    ]
  }
  
  flagArray[223] = {
    title: `Thrash Machine Head Color`,
    range:{
      min:0,
      max:31
    }
  }
  
  flagArray[224] = {
    title: `Thrash Machine Body Color`,
    range:{
      min:0,
      max:31
    }
  }
  
  flagArray[225] = {
    title: `Thrash Machine Feet Color`,
    range:{
      min:0,
      max:31
    }
  }
}

function ParseNewhomeCh1(){
  
  flagArray[255] = {
    title: `Noelle Hospital Cutscene`,
    description: `The cutscene that plays at the end of Chapter 1 when you visit the Hospital for the first time.`
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Watched",
        "description": ""
      },
      {
        "id": 1,
        "title": "Watched",
        "description": ""
      },
      {
        "id": 2,
        "title": "Talked to Rudy",
        "description": ""
      }
    ]
  }
  
  flagArray[256] = {
    title: `Talked to Berdly`,
    description: `Whether you've talked to Berdly or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
}

function ParseGlobalFlags(){
  return new Promise((resolve,reject)=>{
    ParseFlags();
    ParseThrashMachine();
    ParseNewhomeCh1();
    
    SetFlags();
    
    resolve(flagArray);
  });
}

module.exports = ParseGlobalFlags;