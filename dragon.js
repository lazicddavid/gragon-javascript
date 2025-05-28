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

/*
let book = {
  naslov: "JavaScript za pocetnike",
  autor: "Ivan Ivic",
  godinaIzdavanja: 2022,
  cena: 25,
  stanje: "nova",
  zanr: "tehnologija",
  naStanju: true,
};

function getBookInfo() {
  return `Naslov: ${book.naslov}, Autor: ${book.autor}, Cena: ${book.cena}, Stanje: ${book.stanje}`;
}

function calculateBookAge() {
  let trenutnaGodina = new Date().getFullYear();
  return trenutnaGodina - book.godinaIzdavanja;
}

function changeBookPrice(novaCena) {
  book.cena = novaCena;
  return book.cena;
}

function changeBookState(novoStanje) {
  if (
    novoStanje === "nova" ||
    novoStanje === "polovna" ||
    novoStanje === "ostecena"
  ) {
    book.stanje = novoStanje;
    return `Stanje knjige je sada: ${book.stanje}`;
  } else {
    return "Greška: dozvoljena stanja su: 'nova', 'polovna', 'oštećena'.";
  }
}

function isInStock() {
  console.log(book.naStanju ? "Knjiga je na stanju" : "Knjiga nije dostupna");
  return book.naStanju;
}

function toggleStockStatus() {
  book.naStanju = !book.naStanju;
  console.log(`Novo stanje: ${book.naStanju ? "dostupno" : "nedostupno"}`);
  return book.naStanju;
}

function printBookDetails() {
  console.log(
    `Naslov: ${book.naslov}, Autor: ${book.autor}, Godina izdavanja: ${
      book.godinaIzdavanja
    }, Cena: ${book.cena}, Stanje: ${book.stanje}, Zanr: ${
      book.zanr
    }, Dostupna na stanju: ${book.naStanju ? "Da" : "Ne"}`
  );
}

// Primeri poziva:
console.log(getBookInfo());
console.log("Knjiga je stara " + calculateBookAge() + " godina");
console.log("Nova cena: " + changeBookPrice(39));
console.log(changeBookState("polovna"));
isInStock();
toggleStockStatus();
toggleStockStatus();
printBookDetails();
*/

let monster = {
  name: "dragon",
  health: 100,
  energy: 99,
  level: 12,
  experience: 30,
  speed: 250,
  attack: 54,
  movement: "walking",

  logStats: function () {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Energy: ${this.energy}, Level: ${this.level}, Experience: ${this.experience}, Speed: ${this.speed}, Movement: ${this.movement}`
    );
  },

  fly: function () {
    if (this.movement === "walking") {
      this.movement = "flying";
      this.speed += 50;
      console.log(`${this.name} is now flying. Current speed is ${this.speed}`);
    } else {
      console.log("Monster is already flying");
    }
  },

  walk: function () {
    if (this.movement === "walking") {
      console.log("Monster is already walking");
    } else {
      this.movement = "walking";
      this.speed -= 50;
      console.log(`Monster is now walking, speed ${this.speed}`);
    }
  },

  attackTarget: function (target) {
    if (this.energy < 30) {
      console.log("Dont have enough energy to attack!");
      return;
    }

    if (target < this.attack) {
      console.log("Monster attacked with success.");
      this.experience += 50;
      this.energy -= 50;
    } else {
      console.log("Monster failed to attack.");
      this.energy -= 70;
      this.health -= 50;
    }

    this.checkStats();
  },

  heal: function () {
    this.energy += 100;
    this.health += 100;
    this.logStats();
  },

  checkStats: function () {
    if (this.health < 1) {
      console.log("Monster died. Game over");
      return;
    }

    if (this.experience > 100) {
      let newExp = this.experience - 100;
      this.level += 1;
      this.experience = newExp;
      console.log(
        `Level up, New level: ${this.level}, remaining EXP: ${this.experience}`
      );
    }
  },
};

monster.logStats();
monster.fly();
monster.walk();
monster.attackTarget(40);
monster.attackTarget(80);
monster.heal();
*/

function cutFruidPieces (fruit) {
  return fruit * 4;

}

