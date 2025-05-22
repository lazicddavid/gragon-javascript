/*

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

console.log("------------------");
function walk() {
  if (movement === "flying") {
    movement = "walking";
    speed -= 50;
    console.log(`Monster is now walking, speed ${speed}`);
  } else if (movement === "walking") {
    console.log("Monster is already walking.");
  }
  /*checkStats();
}

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

console.log("------------");

function heal() {
  health += 100;
  energy += 100;
  logStats();
}
heal();
console.log("------------");

function checkStats() {
  if (health < 1) {
    console.log("Monster died. Game over");
    return;
  }

  if (experience > 100) {
    level += 1;
    experience = 0;
    console.log(
      `Level up! Monster is now level ${level}, experience is ${experience}`
    );
  }
}
fly();
walk();

console.log("------------");

attack(40);

console.log("------------");

heal();

console.log("------------");
*/

function getBookInfo() {
  let naslov = "JavaScript za pocetnike";
  let autor = "Ivan Ivic";
  let godinaIzdavanja = 2022;
  let cena = 25;
  let stanje = "nova";
  let zanr = "tehnologija";
  let naStanju = true;

  return `Naslov: ${naslov}, Autor: ${autor}, Cena: ${cena}, Stanje: ${stanje}`;
}

console.log(getBookInfo());

function calculateBookAge() {
  let godinaIzdavanja = 2022;
  let trenutnaGodina = new Date().getFullYear();
  let starostKnjige = trenutnaGodina - godinaIzdavanja;
  return starostKnjige;
}
console.log("Knjiga je stara" + calculateBookAge() + " godina");

function changeBookPrice(novaCena) {
  cena = novaCena;
  return cena;
}
console.log(`Nova cena je ${changeBookPrice(39)} evra.`);

function changeBookState(novoStanje) {
  if (
    novoStanje === "nova" ||
    novoStanje === "polovna" ||
    novoStanje === "ostecena"
  ) {
    stanje = novoStanje;
    return `Stanje knjige je sada: ${stanje}`;
  } else {
    return "Greska: dozvoljena stanja su: 'nova' , 'polovna' , 'ostecena'.";
  }
}
console.log(changeBookState("polovna"));

let naStanju = true;
function IsInStock() {
  if (naStanju === true) {
    console.log("Knjiga je na stanju");
  } else {
    console.log(`Knjiga nije dostupna`);
    return false;
  }
}
IsInStock();

console.log("---------------------");

function toggleStockStatus() {
  naStanju = !naStanju;
  console.log(`Novo stanje: ${naStanju ? "dostupno" : "nedostupno"}`);
  return naStanju;
}

console.log(toggleStockStatus());
console.log(toggleStockStatus());

console.log("---------------------");

function printBookDetails() {
  let naslov = "JavaScript za pocetnike";
  let autor = "Ivan Ivic";
  let godinaIzdavanja = 2022;
  let cijena = 25;
  let stanje = "nova";
  let zanr = "tehnologija";
  let dostupna = true;

  console.log(
    `Naslov: ${naslov}, Autor: ${autor}, Godina izdavanja: ${godinaIzdavanja}, Cena: ${cena}, Stanje: ${stanje}, Zanr: ${zanr}, Dostupna na stanju: ${
      dostupna ? "Da" : "Ne"
    }`
  );
}

printBookDetails();
