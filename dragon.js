let monsterName = "dragon";
let health = 100;
let energy = 99;
let level = 12;
let experience = 30;
let speed = 250;
let attackPower = 54;
let movement = "walking";

function logStats() {
  let stats = `Name: ${monsterName}, Health: ${health}, 
  Energy: ${energy}, Level: ${level}, Experience:
   ${experience}, Speed: ${speed}, Attack Power: ${attackPower},
   Movement: ${movement}`;
  console.log(stats);
}

function fly() {
  if (movement === "walking") {
    movement = "flying";
    speed += 50;
    console.log(`${monsterName} is now flying, current speed is ${speed}`);
  } else if (movement === "flying") {
    console.log("Monster is already flying.");
  }

  checkStats();
}
