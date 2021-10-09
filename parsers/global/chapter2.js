function ParseFlags(flagArray){

  flagArray[34] = {
    title: `Party X Action Learned`,
    description: `Whether your party members can ACT`,
    toggle:{
      off: 0,
      on: 1
    }
  }
}

function ParseNewhomeCh2(flagArray){
  flagArray[302] = {
    title: `Ball of Junk`,
    description: `The status of the ball of junk you take from the unused classroom.`,
    dropdown:[
      {
        "id": 0,
        "title": "Not Gathered",
        "description": ""
      },
      {
        "id": 1,
        "title": "On Head",
        "description": ""
      },
      {
        "id": 2,
        "title": "In Dark World",
        "description": ""
      }
    ]
  }
  
  flagArray[303] = {
    title: `Toriel School Cutscene`,
    description: `If you've overheard Alphys and Toriel talking about you in the school`,
    dropdown:[
      {
        "id": 0,
        "title": "No",
        "description": ""
      },
      {
        "id": 1,
        "title": "Yes",
        "description": ""
      }
    ]
  }

  
}


function ParseChapter2GlobalFlags(flagArray){
  return new Promise((resolve,reject)=>{
    ParseFlags(flagArray);
    ParseNewhomeCh2(flagArray);
    
    
    
    resolve(flagArray);
  });
}

module.exports = ParseChapter2GlobalFlags;