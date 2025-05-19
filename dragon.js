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
}

fly();

function walk() {
  if (movement === "flying") {
    movement = "walking";
    speed -= 50;
    console.log(`Monster is now walking, speed ${speed}`);
  } else if (movement === "walking") {
    console.log("Monster is already walking.");
  }
}
walk();

console.log("------------");

function attack(number) {
  if (energy < 30) {
    console.log("Don't have enough energy to attack!");
    return;
  }

  if (number < attackPower) {
    console.log("Monster attacked successfully!");
    experience += 50;
    energy -= 50;
  } else {
    console.log("Monster failed to attack!");
    energy -= 70;
    health -= 50;
  }
}
function attack(number) {
  if (energy < 30) {
    console.log("Don't have enough energy to attack!");
    return;
  }

  if (number < attackPower) {
    console.log("Monster attacked successfully!");
    experience += 50;
    energy -= 50;
  } else {
    console.log("Monster failed to attack!");
    energy -= 70;
    health -= 50;
  }
}

attack(40);

function heal() {
  health += 100;
  energy += 100;
  logStats();
}
heal();

function checkStats() {
  if (health < 1) {
    console.log("Monster died. GAME OVER");
    return;
  }

  if (experience > 100) {
    level += 1;
    experience = experience - 100;
    console.log(
      `Level up! Monster is now level ${level}, experience is ${experience}`
    );
  }
}

checkStats();
