let enter = event.key;

 let user_stats = [
   {
       Name: textArea.start(),
       Health: 100,
       Inventory = [
         {
           Type: weapons,
           Name: "hands",
           Damige: 1,
         },
         {
           Type: weapons,
           Name: "legs",
           Damige: 10,
         }
       ]
   }
];



let fighting;
let terminalform = document.getElementsById('terminalform');
let textArea = document.getElementsByClassName('.text-area').innerText;
const narratorArea = document.querrySelector('.narrator-area').innerText;
const weapons = [
  {
    name: "gun",
    Damige: 10
  },
  {
    name: "toilet-papers",
    Damige: 0.9
  },
  {
    name: "drawer",
    Damige: 70
  }
];

const locations = [
  {
    name: "the-test-room",
    "text": ["laboratory 32","audotorium 55","stairs",],
    "functions": [ laboratory32, audotorium55, stairs],
    textArea: "welcome to the test room"
  },
  {
    name: "laboratory-32",
    "text": ["attack","run","skibidi"],
    "functions": [ attack, run, skibidi],
    
  },
  {
    name: "get-people"
    
  }
];



let entry_monsters = [
  {
    Name: "The Sigma",
    Health: 69,
    ATK: 86,
  },
  {
    Name: "Scurvydibbles",
    Health: 100,
    ATK: 0.5,
  },
  {
    Name: "Broken dog",
    Health: 80,
    ATK: 10,
  },
  {
    Name: "The Rizzler",
    Health: 100,
    ATK: 50,
  }
];

let intermediate_monsters = [
  {
    Name: "The Ohio prince",
    Health: 7
  }
];

let final_monsters = [
  {
    Name: "Ohio Mewing",
    Health: 999,
    ATK: 69,
  },
  {
    Name: "The Mighty Rizzler",
    Health: 6969,
    ATK: 10,
  },
  {
    Name: "skrubblenaut",
    Health: 100,
    ATK: 100,
  }
];
  

function start() {
  if (textArea == "./test-room.html") {
    narratorArea.innerText = "You have enter the test room. what is your name?"
    
    if (textArea == true) {
      narratorArea.innerText = "Hello" + textArea + "welcome to jumanji (press enter to continue)";
    }
      if (KeyboardEvent = enter) {
        narratorArea.innerText = 
          "where would you like to go?
         "1. laboratory-32
          2. audotorium-55
          3. stairs"
        
        if (textArea = 1) {
          laboratory32();
        }
        else if (textArea = 2) {
          audotorium55();
        }
        else if (textArea = 3) {
          stairs();
        }
        
      }
    else {
      narratorArea.innerText = "Please enter your name"
        if (textArea == true) {
          narratorArea.innerText = "Hello" + textArea + "welcome to the test room (press enter to continue)";
        }
    }
    
  }
}

function laboratory32() {
  narratorArea.innerText = "you have encountered" + entry_monsters[2]  + " a past test subject done by your grandfathers team. What would you like to do. 1. investigate the bookshelf
    2. attack the drawer
    3. hand stand towards the trapdoor
    4. sit
    5. get out of the room";
  
  if (textArea == 1) {
    narratorArea.innerText = "you looked around the bookshelf and found a mysterious looking book of "
  }
  else if (textArea == 2) {
    narratorArea.innerText = "you attacked the drawer and it broke to smithereens."
    currentWeapons.push(weapons[2]);
    
  }
  else if (textArea == 3) {
    
  } 
  else if (textArea == 4) {
    
  }
  else if (textArea == 5) {
    
  }
}

function audotorium55() {
  narratorArea.innerText = "you" + entry_monsters[fighting] + 
}

function stairs() {
  narratorArea.innerText = "youre walking down the stairs"
  
}

function attack() {
  entry_monsters[0].Health -= weapons[0].ATK;

  if (entry_monsters[0].Health > 0) {
    narratorArea.innerText = "you attacked" + entry_monsters[fighting] + "and gave "
  }
  else (entry_monsters[0].Health < 0) {
    narratorArea.innerText = "you bashed" + entry_monsters[fighting] + "with your" + weapons[0].name + "and killed them"
  }
  
}



function skibidi() {
  if (textArea == "skibidi") {
    narratorArea.innerText = "You've skibbidied back to the" + locations[0] + "what would you like to do coward?"
  }
    if (textArea == "") {
      
    }
}

function textformat(textArea == true) {
  let = ""
  push()
}

function skibidiAttack() {
  if (textArea == "Skibidi") {
    let min = 89.8;
    let max = 100;
    let randomNum Math.random() * (max - min) + min;
      if (randomNum = 7) {
          entry_monsters[fighting].health - 1000;
          narratorArea.innerText = "you screamed скибиди туолет to" +                entry_monsters[fighting] + "and killed him instantly"
        }
      }
}

