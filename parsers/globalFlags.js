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
    description: `Auto Run menu toggle`,
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
    description: `Thrash Machine Head`,
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
    description: `Thrash Machine Body`,
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
    description: `Thrash Machine Feet`,
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
    description: `Thrash Machine Head Color`,
    range:{
      min:0,
      max:31
    }
  }
  
  flagArray[224] = {
    title: `Thrash Machine Body Color`,
    description: `Thrash Machine Body Color`,
    range:{
      min:0,
      max:31
    }
  }
  
  flagArray[225] = {
    title: `Thrash Machine Feet Color`,
    description: `Thrash Machine Feet Color`,
    range:{
      min:0,
      max:31
    }
  }
}

function ParseNewhomeCh1(){
  
  flagArray[255] = {
    title: `Noelle Hospital Cutscene`,
    description: `The cutscene that plays at the end of Chapter 1 when you visit the Hospital for the first time.`,
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
  
  flagArray[257] = {
    title: `Fingers in Picnic Table`,
    description: `Whether you've tried to stick your fingers in the picnic table or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[258] = {
    title: `Talked to Onion`,
    description: `Whether you've talked to Onion and what note you ended the conversation on`,
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Talked",
        "description": ""
      },
      {
        "id": 1,
        "title": "Started Conversation",
        "description": ""
      },
      {
        "id": 2,
        "title": "Ended on a good note",
        "description": ""
      },
      {
        "id": 3,
        "title": "Ended on a bad note",
        "description": ""
      }
    ]
  }
  
  flagArray[259] = {
    title: `Onion's name for you`,
    description: `What you tell Onion your name is`,
    dropdown:[
      {
        "id": 0,
        "title": "None",
        "description": ""
      },
      {
        "id": 1,
        "title": "Kris",
        "description": ""
      },
      {
        "id": 2,
        "title": "Hippopotamus",
        "description": ""
      }
    ]
  }
  
  flagArray[260] = {
    title: `Onion's Name`,
    description: `What name you give Onion`,
    dropdown:[
      {
        "id": 0,
        "title": "None",
        "description": ""
      },
      {
        "id": 1,
        "title": "Onion",
        "description": ""
      },
      {
        "id": 2,
        "title": "Beauty",
        "description": ""
      },
      {
        "id": 3,
        "title": "Asriel II",
        "description": ""
      },
      {
        "id": 4,
        "title": "Disgusting",
        "description": ""
      }
    ]
  }
  
  flagArray[261] = {
    title: `Free Hot Chocolate`,
    description: `Whether you've claimed the free hot chocolate at the Diner or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[262] = {
    title: `Asgore Flower Cutscene`,
    description: `Whether you've seen the Asgore cutscene or not`,
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
        "title": "Gotten Flowers",
        "description": ""
      },
      {
        "id": 3,
        "title": "Given flowers to Toriel",
        "description": ""
      },
      {
        "id": 4,
        "title": "Toriel throws away flowers",
        "description": ""
      }
    ]
  }
  
  flagArray[265] = {
    title: `Talked to Catty`,
    description: `Whether you've talked to Catty or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[269] = {
    title: `Alphys Alleyway Cutscene`,
    description: `Whether Alphys has seen you int he alleyway or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[270] = {
    title: `Talked to Undyne`,
    description: `Whether you've talked to Undyne or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[271] = {
    title: `Talked to Burgerpants`,
    description: `Whether you've talked to Burgerpants or not`,
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Talked",
        "description": ""
      },
      {
        "id": 1,
        "title": "Started Conversation",
        "description": ""
      },
      {
        "id": 2,
        "title": "Seen all intro dialogue",
        "description": ""
      }
    ]
  }
  
  flagArray[272] = {
    title: `Phone call with Toriel`,
    description: `Whether you've spoken with Toriel on the phone or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[273] = {
    title: `Talked to Sans`,
    description: `Whether you've talked to Sans or not`,
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Talked",
        "description": ""
      },
      {
        "id": 1,
        "title": "Talked",
        "description": ""
      },
      {
        "id": 2,
        "title": "Talked about Sans's brother",
        "description": ""
      }
    ]
  }
  
  flagArray[274] = {
    title: `Gotten Sans's Number`,
    description: `Whether you've gotten Sans's number and called it or not`,
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Gotten",
        "description": ""
      },
      {
        "id": 1,
        "title": "Gotten",
        "description": ""
      },
      {
        "id": 2,
        "title": "Called it",
        "description": ""
      }
    ]
  }
  
  flagArray[275] = {
    title: `Rudy's Sink Interaction`,
    description: `Whether you've interacted with Rudy's sink in the hospital or not`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[276] = {
    title: `Talked to Noelle`,
    description: `Whether you've talked to Noelle or not`,
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Talked",
        "description": ""
      },
      {
        "id": 1,
        "title": "Talked",
        "description": ""
      },
      {
        "id": 2,
        "title": "Talked about Susie",
        "description": ""
      }
    ]
  }
  
  flagArray[277] = {
    title: `Times enteres house`,
    description: `How many Times you've entered your house, Unique dilogue for Toriel at 0, 1, and 7.`,
    range:{
      min:0,
      max:8
    }
  }
  
}


function ParseOtherCh1(){
  
  flagArray[241] = {
    title: `Jevil Quest`,
    description: `The quest flag for unlocking, fighting, and defeating Jevil.`,
    range:{
      min:0,
      max:7
    }
  }
  
  flagArray[252] = {
    title: `Bed Inspector`,
    description: `Whether you've inspected all of the beds in the castle or not.`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[253] = {
    title: `Spin Cake`,
    description: `Whether you've recieved the Spin Cake or not.`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[254] = {
    title: `The Original Starwalker`,
    description: `Whether you've spoken to The Original Starwalker or not.`,
    toggle:{
      off: 0,
      on: 1
    }
  }
  
  flagArray[910] = {
    title: `Chapter 1 Secret Room`,
    description: `The state of interaction with the secret room in Chapter 1`,
    dropdown:[
      {
        "id": 0,
        "title": "Haven't Seen",
        "description": ""
      },
      {
        "id": 1,
        "title": "Seen Room",
        "description": ""
      },
      {
        "id": 2,
        "title": "Recieved Egg",
        "description": ""
      }
    ]
  }
  
  flagArray[911] = {
    title: `Chapter 1 Eggs`,
    description: `The number of eggs you've gotten in Chapter 1`,
    range:{
      min:-9999999999,
      max:9999999999
    },
  }
  
}

function ParseGoner(){
  flagArray[900] = {
    title: `Vessel Head`,
    description: `The Head for the Vessel`,
    range:{
      min:0,
      max:7
    }
  }
  
  flagArray[901] = {
    title: `Vessel Body`,
    description: `The Body for the Vessel`,
    range:{
      min:0,
      max:5
    }
  }
  
  flagArray[902] = {
    title: `Vessel Legs`,
    description: `The Legs for the Vessel`,
    range:{
      min:0,
      max:4
    }
  }
  
  flagArray[903] = {
    title: `What is its favorite food?`,
    description: `What is its favorite food?`,
    dropdown:[
      {
        "id": 0,
        "title": "SWEET",
        "description": ""
      },
      {
        "id": 1,
        "title": "SOFT",
        "description": ""
      },
      {
        "id": 2,
        "title": "SOUR",
        "description": ""
      },
      {
        "id": 3,
        "title": "SALTY",
        "description": ""
      },
      {
        "id": 4,
        "title": "PAIN",
        "description": ""
      },
      {
        "id": 5,
        "title": "COLD",
        "description": ""
      }
    ]
  }
  
  flagArray[904] = {
    title: `Your favorite blood type?`,
    description: `Your favorite blood type?`,
    dropdown:[
      {
        "id": 0,
        "title": "A",
        "description": ""
      },
      {
        "id": 1,
        "title": "AB",
        "description": ""
      },
      {
        "id": 2,
        "title": "B",
        "description": ""
      },
      {
        "id": 3,
        "title": "C",
        "description": ""
      },
      {
        "id": 4,
        "title": "D",
        "description": ""
      }
    ]
  }
  
  flagArray[905] = {
    title: `What color does it like most?`,
    description: `What color does it like most?`,
    dropdown:[
      {
        "id": 0,
        "title": "RED",
        "description": ""
      },
      {
        "id": 1,
        "title": "BLUE",
        "description": ""
      },
      {
        "id": 2,
        "title": "GREEN",
        "description": ""
      },
      {
        "id": 3,
        "title": "CYAN",
        "description": ""
      }
    ]
  }
  
  flagArray[906] = {
    title: `How do you feel about your creation? (it will not hear.)`,
    description: `How do you feel about your creation? (it will not hear.)`,
    dropdown:[
      {
        "id": 0,
        "title": "LOVE",
        "description": ""
      },
      {
        "id": 1,
        "title": "HOPE",
        "description": ""
      },
      {
        "id": 2,
        "title": "DISGUST",
        "description": ""
      },
      {
        "id": 3,
        "title": "FEAR",
        "description": ""
      }
    ]
  }
  
  flagArray[907] = {
    title: `Have you answered honestly?`,
    description: `Have you answered honestly?`,
    dropdown:[
      {
        "id": 0,
        "title": "YES",
        "description": ""
      },
      {
        "id": 1,
        "title": "NO",
        "description": ""
      }
    ]
  }
  
  flagArray[908] = {
    title: `You acknowledge the possibility of pain and seizure.`,
    description: `You acknowledge the possibility of pain and seizure.`,
    dropdown:[
      {
        "id": 0,
        "title": "YES",
        "description": ""
      },
      {
        "id": 1,
        "title": "NO",
        "description": ""
      }
    ]
  }
  
  flagArray[909] = {
    title: `Please give it a gift.`,
    description: `Please give it a gift.`,
    dropdown:[
      {
        "id": 0,
        "title": "KINDNESS",
        "description": ""
      },
      {
        "id": 1,
        "title": "MIND",
        "description": ""
      },
      {
        "id": 2,
        "title": "AMBITION",
        "description": ""
      },
      {
        "id": 3,
        "title": "BRAVERY",
        "description": ""
      },
      {
        "id": 4,
        "title": "VOICE",
        "description": ""
      }
    ]
  }
  
}


function ParseGlobalFlags(){
  return new Promise((resolve,reject)=>{
    ParseFlags();
    ParseThrashMachine();
    ParseNewhomeCh1();
    ParseOtherCh1();
    ParseGoner();
    
    SetFlags();
    
    resolve(flagArray);
  });
}

module.exports = ParseGlobalFlags;