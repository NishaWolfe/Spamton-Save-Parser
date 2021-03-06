var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

const requiredJSON = ["spells","armor","weapons","items","keyitems","lightworlditems","phonenumbers"];

var chapterArray = new Array(552);

const workingDir = process.cwd();


function GetJSON(file) {
   var filePath = `${workingDir}/json/${file}.json`;
   return fs.readFileAsync(filePath,'utf8');
}

function GetAllJSON() {
  var promises = [];
  
  for (var i = 0; i < requiredJSON.length; i++) {
      promises.push(GetJSON(requiredJSON[i]));
  }
  
  return Promise.all(promises);
}

function ParseIntro(){
  
  //Line 1
  chapterArray[0] = {
		title: `Your Name`,
    description: ``,
		string: ``,
		var: `truename`
  }
  
  //Lines 2-7
  for(var i = 0; i < 6; i++){
    chapterArray[1+i] = {
      title: `Other Name ${i}`,
      description: ``,
      string: ``,
      var: `othername[${i}]`
    }
  }
  
  //Override Line 2
  chapterArray[1].title = "Vessel Name";
  
  //Lines 8-10
  for(var i = 0; i < 3; i++){
    chapterArray[7+i] = {
      title: `Party Member ${i+1}`,
      description: ``,
      range: {
        min:0,
        max:4
      },
      var: `char[${i}]`
    }
  }
  
  //Line 11
  chapterArray[10] = {
    title: `Dark Dollars`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `gold`
  }
  
  //Line 12
  chapterArray[11] = {
    title: `xp`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `xp`
  }
  
  //Line 13
  chapterArray[12] = {
    title: `lv`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lv`
  }
  
  //Line 14
  chapterArray[13] = {
    title: `inv`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `inv`
  }
  
  //Line 15
  chapterArray[14] = {
    title: `invc`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `invc`
  }
  
  //Line 16
  chapterArray[15] = {
    title: `Darkzone Toggle`,
    description: ``,
    toggle:{
      off: 0,
      on: 1
    },
    var: `darkzone`
  }
  
}

function ParseCharacters(weapons, armor, spells){
  const offset = 16;
  const parseLength = 62;
  const characters = ["Undefined","Kris","Susie","Ralsei","Noelle"];
  
  for(var i = 0; i < 5; i++){
    var curOffset = offset+(parseLength*i);
    
    chapterArray[curOffset+0] = {
      title: `${characters[i]} HP`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `hp[${i}]`
    }
    
    chapterArray[curOffset+1] = {
      title: `${characters[i]} Max HP`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `maxhp[${i}]`
    }
    
    chapterArray[curOffset+2] = {
      title: `${characters[i]} Attack`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `at[${i}]`
    }
    
    chapterArray[curOffset+3] = {
      title: `${characters[i]} Defense`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `df[${i}]`
    }
    
    chapterArray[curOffset+4] = {
      title: `${characters[i]} Magic`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `mag[${i}]`
    }
    
    chapterArray[curOffset+5] = {
      title: `${characters[i]} Guts`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `guts[${i}]`
    }
    
    chapterArray[curOffset+6] = {
      title: `${characters[i]} Weapon Slot`,
      description: ``,
      dropdown:[],
      var: `charweapon[${i}]`
    }
    for(var k = 0; k < 23; k++){
      chapterArray[curOffset+6].dropdown[k] = weapons[k];
    }
    
    chapterArray[curOffset+7] = {
      title: `${characters[i]} Armor Slot 1`,
      description: ``,
      dropdown:[],
      var: `chararmor1[${i}]`
    }
    for(var k = 0; k < 23; k++){
      chapterArray[curOffset+7].dropdown[k] = armor[k];
    }
    
    chapterArray[curOffset+8] = {
      title: `${characters[i]} Armor Slot 2`,
      description: ``,
      dropdown:[],
      var: `chararmor2[${i}]`
    }
    for(var k = 0; k < 23; k++){
      chapterArray[curOffset+8].dropdown[k] = armor[k];
    }

    chapterArray[curOffset+9] = {
      title: `${characters[i]} weaponstyle`,
      description: ``,
      range:{
        min:-9999999999,
        max:9999999999
      },
      var: `weaponstyle[${i}]`
    }


    for(var j = 0; j < 4; j++){
      var curOffsetTemp = curOffset+10+(j*10);
      
      chapterArray[curOffsetTemp+0] = {
        title: `${characters[i]} itemat[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemat[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+1] = {
        title: `${characters[i]} itemdf[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemdf[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+2] = {
        title: `${characters[i]} itemmag[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemmag[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+3] = {
        title: `${characters[i]} itembolts[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itembolts[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+4] = {
        title: `${characters[i]} itemgrazeamt[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemgrazeamt[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+5] = {
        title: `${characters[i]} itemgrazesize[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemgrazesize[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+6] = {
        title: `${characters[i]} itemboltspeed[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemboltspeed[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+7] = {
        title: `${characters[i]} itemspecial[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemspecial[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+8] = {
        title: `${characters[i]} itemelement[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemelement[${i},${j}]`
      }
      
      chapterArray[curOffsetTemp+9] = {
        title: `${characters[i]} itemelementamount[${j}]`,
        description: ``,
        range:{
          min:-9999999999,
          max:9999999999
        },
        var: `itemelementamount[${i},${j}]`
      }
      
    }

    for(var j = 0; j < 12; j++){
      chapterArray[curOffset+j+50] = {
        title: `${characters[i]} Spell Slot ${j+1}`,
        description: ``,
        dropdown:[],
        var: `spell[${i},${j}]`
      }
      for(var k = 0; k < 12; k++){
        chapterArray[curOffset+j+50].dropdown[k] = spells[k];
      }
    }

  }
}

function ParseGraze(){
  chapterArray[326] = {
    title: `boltspeed`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `boltspeed`
  }
  
  chapterArray[327] = {
    title: `grazeamt`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `grazeamt`
  }
  
  chapterArray[328] = {
    title: `grazesize`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `grazesize`
  }
}

function ParseItems(items,keyitems){
  
  var offset = 329;
  var parseLength = 2;
  for(var i = 0; i < 13; i++){
    var curOffset = offset + (i*parseLength);
    
    chapterArray[curOffset+0] = {
      title: `Item Slot ${i+1}`,
      description: ``,
      dropdown:[],
      var: `item[${i}]`
    }
    for(var k = 0; k < 34; k++){
      chapterArray[curOffset+0].dropdown[k] = items[k];
    }
    
    chapterArray[curOffset+1] = {
      title: `Key Item Slot ${i+1}`,
      description: ``,
      dropdown:[],
      var: `keyitem[${i}]`
    }
    for(var k = 0; k < 16; k++){
      chapterArray[curOffset+1].dropdown[k] = keyitems[k];
    }
  }
}



function ParseWeaponsArmor(weapons,armor){
  
  var offset = 355;
  var parseLength = 2;
  for(var i = 0; i < 48; i++){
    var curOffset = offset + (i*parseLength);
    
    chapterArray[curOffset+0] = {
      title: `Weapon Slot ${i+1}`,
      description: ``,
      dropdown:[],
      var: `weapon[${i}]`
    }
    for(var k = 0; k < 23; k++){
      chapterArray[curOffset+0].dropdown[k] = weapons[k];
    }
    
    chapterArray[curOffset+1] = {
      title: `Armor Slot ${i+1}`,
      description: ``,
      dropdown:[],
      var: `armor[${i}]`
    }
    for(var k = 0; k < 23; k++){
      chapterArray[curOffset+1].dropdown[k] = armor[k];
    }
  }
}



function ParseStorage(items){
  
  var offset = 451;
  for(var i = 0; i < 72; i++){
    var curOffset = offset + i;
    
    chapterArray[curOffset] = {
      title: `Storage Slot ${i+1}`,
      description: ``,
      dropdown:[],
      var: `pocketitem[${i}]`
    }
    for(var k = 0; k < 34; k++){
      chapterArray[curOffset].dropdown[k] = items[k];
    }
    
  }
}





function ParseTension(){
  chapterArray[523] = {
    title: `tension`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `tension`
  }
  
  chapterArray[524] = {
    title: `maxtension`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `maxtension`
  }
}


function ParseLightworld(lightworlditems){
  
  chapterArray[525] = {
    title: `Lightworld Weapon`,
    description: ``,
    dropdown:[],
    var: `lweapon`
  }
  chapterArray[525].dropdown[chapterArray[525].dropdown.length] = lightworlditems[2];
  chapterArray[525].dropdown[chapterArray[525].dropdown.length] = lightworlditems[6];
  chapterArray[525].dropdown[chapterArray[525].dropdown.length] = lightworlditems[7];
  chapterArray[525].dropdown[chapterArray[525].dropdown.length] = lightworlditems[12];
  
  chapterArray[526] = {
    title: `Lightworld Armor`,
    description: ``,
    dropdown:[],
    var: `larmor`
  }
  chapterArray[526].dropdown[chapterArray[526].dropdown.length] = lightworlditems[3];
  chapterArray[526].dropdown[chapterArray[526].dropdown.length] = lightworlditems[14];
  
  chapterArray[527] = {
    title: `Lightworld EXP`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lxp`
  }
  
  chapterArray[528] = {
    title: `Lightworld Level`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `llv`
  }
  
  chapterArray[529] = {
    title: `Lightworld Dollars`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lgold`
  }
  
  chapterArray[530] = {
    title: `Lightworld HP`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lhp`
  }
  
  chapterArray[531] = {
    title: `Lightworld Max HP`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lmaxhp`
  }
  
  chapterArray[532] = {
    title: `Lightworld AT`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lat`
  }
  
  chapterArray[533] = {
    title: `Lightworld DF`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `ldf`
  }
  
  chapterArray[534] = {
    title: `lwstrength`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `lwstrength`
  }
  
  chapterArray[535] = {
    title: `ladef`,
    description: ``,
    range:{
      min:-9999999999,
      max:9999999999
    },
    var: `ladef`
  }
}

function ParseLightworldItems(lightworlditems,phonenumbers){
  
  var offset = 536;
  var parseLength = 2;
  for(var i = 0; i < 8; i++){
    var curOffset = offset + (i*parseLength);
    
    chapterArray[curOffset+0] = {
      title: `Lightworld Item Slot ${i+1}`,
      description: ``,
      dropdown:[],
      var: `litem[${i}]`
    }
    for(var k = 0; k < 15; k++){
      chapterArray[curOffset+0].dropdown[k] = lightworlditems[k];
    }
    
    chapterArray[curOffset+1] = {
      title: `Phone Number ${i+1}`,
      description: ``,
      dropdown:[],
      var: `phone[${i}]`
    }
    for(var k = 0; k < 3; k++){
      chapterArray[curOffset+1].dropdown[k] = phonenumbers[k];
    }
  }
}
 
 function ParseChapter2(){
   return new Promise((resolve,reject)=>{
     GetAllJSON().then(function(jsonArray) {
       const spells = JSON.parse(jsonArray[0]);
       const armor = JSON.parse(jsonArray[1]);
       const weapons = JSON.parse(jsonArray[2]);
       const items = JSON.parse(jsonArray[3]);
       const keyitems = JSON.parse(jsonArray[4]);
       const lightworlditems = JSON.parse(jsonArray[5]);
       const phonenumbers = JSON.parse(jsonArray[6]);
       
       ParseIntro();
       ParseCharacters(weapons, armor, spells);
       ParseGraze();
       ParseItems(items,keyitems);
       ParseWeaponsArmor(weapons,armor);
       ParseStorage(items);
       ParseTension();
       ParseLightworld(lightworlditems);
       ParseLightworldItems(lightworlditems,phonenumbers);
       
       resolve(chapterArray);

     }, function(err) {
       reject(err);
     });
   });
 }
 
module.exports = ParseChapter2;
