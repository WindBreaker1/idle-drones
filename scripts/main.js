// =============================================================== //
// ======================== HTML DOM ELEMENTS ========================== //
// =============================================================== //

// Wilderness Section
const foodText = document.querySelector(".food-text");
const addFoodButton = document.querySelector(".add-food-button");

// Human Section
const humanSectionStatus = document.querySelector("#human-section-status")
const populationText = document.querySelector(".population-text");
const humanText = document.querySelector(".human-text");
const humanButton = document.querySelector(".human-button");
const humanTooltip = document.querySelector("#human-tooltip");

// Farm Section
const farmerText = document.querySelector(".farmer-text");
const farmerButton = document.querySelector(".farmer-button");
const farmerTooltip = document.querySelector("#farmer-tooltip");

// Forest Section
const woodText = document.querySelector(".wood-text");
const lumberjackText = document.querySelector(".lumberjack-text");
const lumberjackButton = document.querySelector(".lumberjack-button");
const lumberjackTooltip = document.querySelector("#lumberjack-tooltip");

// Quarry Section
const stoneText = document.querySelector(".stone-text");
const minerText = document.querySelector(".miner-text");
const minerButton = document.querySelector(".miner-button");
const minerTooltip = document.querySelector("#miner-tooltip");

// Abandoned City Section
const scrapText = document.querySelector(".scrap-text");
const scavengerText = document.querySelector(".scavenger-text");
const scavengerButton = document.querySelector(".scavenger-button");
const scavengerTooltip = document.querySelector("#scavenger-tooltip");

// Drone Factory Section
const droneText = document.querySelector(".drone-text");
const droneBuilderText = document.querySelector(".drone-builder-text");
const droneBuilderButton = document.querySelector(".drone-builder-button");
const droneBuilderTooltip = document.querySelector("#drone-builder-tooltip");

// Upgrades
const upgradeOneButton = document.querySelector(".upgrade-one-button");
const upgradeTwoButton = document.querySelector(".upgrade-two-button");
const upgradeThreeButton = document.querySelector(".upgrade-three-button");
const upgradeFourButton = document.querySelector(".upgrade-four-button");
const upgradeFiveButton = document.querySelector(".upgrade-five-button");
const upgradeSixButton = document.querySelector(".upgrade-six-button");
const upgradeSevenButton = document.querySelector(".upgrade-seven-button");
const upgradeEightButton = document.querySelector(".upgrade-eight-button");
const upgradeNineButton = document.querySelector(".upgrade-nine-button");
const upgradeTenButton = document.querySelector(".upgrade-ten-button");
const upgradeElevenButton = document.querySelector(".upgrade-eleven-button");
const upgradeTwelveButton = document.querySelector(".upgrade-twelve-button");
const upgradeThirteenButton = document.querySelector(".upgrade-thirteen-button");
const upgradeFourteenButton = document.querySelector(".upgrade-fourteen-button");
const upgradeFifteenButton = document.querySelector(".upgrade-fifteen-button");
const upgradeSixteenButton = document.querySelector(".upgrade-sixteen-button");
const upgradeSeventeenButton = document.querySelector(".upgrade-seventeen-button");
const upgradeEighteenButton = document.querySelector(".upgrade-eighteen-button");
const upgradeNineteenButton = document.querySelector(".upgrade-nineteen-button");
const upgradeTwentyButton = document.querySelector(".upgrade-twenty-button");
const upgradeTwentyoneButton = document.querySelector(".upgrade-twentyone-button");
const upgradeTwentytwoButton = document.querySelector(".upgrade-twentytwo-button");
const upgradeTwentythreeButton = document.querySelector(".upgrade-twentythree-button");
const upgradeTwentyfourButton = document.querySelector(".upgrade-twentyfour-button");
const upgradeTwentyfiveButton = document.querySelector(".upgrade-twentyfive-button");
const upgradeTwentysixButton = document.querySelector(".upgrade-twentysix-button");
const upgradeTwentysevenButton = document.querySelector(".upgrade-twentyseven-button");
const upgradeTwentyeightButton = document.querySelector(".upgrade-twentyeight-button");
const upgradeTwentynineButton = document.querySelector(".upgrade-twentynine-button");

// Save and Reset Section
const saveText = document.querySelector(".save-text");
const saveButton = document.querySelector(".save-button");
const resetButton = document.querySelector(".reset-button");

// Win Modal
const winModal = document.querySelector(".win-modal");

// =============================================================== //
// ========================= IMPORTANT VARIABLES ========================== //
// =============================================================== //

//value = null;
let value = JSON.parse(localStorage.getItem("value"));
if (value == null) {
  value = {
    food: 0,
    clickPower: 1,
    human: 0,
    foodToHumanCost: 10,
    humanProduction: 0,
    population: 0,
    populationProduction: 0,
    wood: 0,
    stone: 0,
    scrap: 0,
    drone: 0,
  }
  localStorage.setItem("value", JSON.stringify(value));
}

// =============================================================== //
// ========================= UPDATE DOM ========================== //
// =============================================================== //

function updateText() {
  // Values
  value.food == null ? foodText.innerText = `0 food (0 food/second)` : foodText.innerText = `${Math.trunc(value.food * 10) / 10} food (${Math.trunc(farmer.production * 10)/10} food/second)`;
  value.wood == null ? woodText.innerText = `0 wood (0 wood/second)` : woodText.innerText = `${Math.trunc(value.wood * 10) / 10} wood (${Math.trunc(lumberjack.production * 10)/10} wood/second)`;
  value.stone == null ? stoneText.innerText = `0 stone (0 stone/second)` : stoneText.innerText = `${Math.trunc(value.stone * 10) / 10} stone (${Math.trunc(miner.production * 10)/10} stone/second)`;
  value.scrap == null ? scrapText.innerText = `0 scrap (0 scrap/second)` : scrapText.innerText = `${Math.trunc(value.scrap * 10) / 10} scrap (${Math.trunc(scavenger.production * 10)/10} scrap/second)`;
  value.drone == null ? droneText.innerText = `0 drone/s (0 drones/second)` : droneText.innerText = `${Math.trunc(value.drone * 10) / 10} drone/s (${Math.trunc(droneBuilder.production * 10)/10} drones/second)`;

  // Humans
  value.population == 0 ? populationText.innerText = `Population: 0` : populationText.innerText = `Population: ${Math.trunc(value.population * 10)/10}`;
  value.human == 0 ? humanText.innerText = `0 human/s (0 humans/second)` : humanText.innerText = `${Math.trunc(value.human * 10) / 10} human/s (${Math.trunc(value.humanProduction * 10) / 10} humans/second)`;
  humanTooltip.innerHTML = `Bait a human with the promise of food and safety. <br> Cost: ${Math.trunc(value.foodToHumanCost * 10) / 10} food <br> <i>'Humans are the backbone of society?'</i>`;
  
  // Production
  // Farmers
  farmer == 0 ? farmerText.innerText = `0 farmer/s` : farmerText.innerText = `${farmer.amount} farmer/s`;
  farmerTooltip.innerHTML = `Farmers plant and gather food for you! <br> Cost: ${farmer.humanCost} human, ${Math.trunc(farmer.foodCost * 10) / 10} food <br> <i>'We're becoming self-sufficient!'</i>`;

  // Lumberjacks
  lumberjack == 0 ? lumberjackText.innerText = `0 lumberjack/s` : lumberjackText.innerText = `${lumberjack.amount} lumberjack/s`;
  lumberjackTooltip.innerHTML = `Lumberjacks cut wood for you! <br> Cost: ${lumberjack.humanCost} human, ${Math.trunc(lumberjack.foodCost * 10) / 10} food, ${Math.trunc(lumberjack.woodCost * 10) / 10} wood <br> <i>'We're conquering this planet, one tree at a time.'</i>`;

  // Miners
  miner == 0 ? minerText.innerText = `0 miner/s` : minerText.innerText = `${miner.amount} miner/s`;
  minerTooltip.innerHTML = `Miners mine stone for you! <br> Cost: ${miner.humanCost} human, ${Math.trunc(miner.foodCost * 10) / 10} food, ${Math.trunc(miner.woodCost * 10) / 10} wood, ${Math.trunc(miner.stoneCost * 10) / 10} stone <br> <i>'If they come across any precious metals, they keep it for themselves.'</i>`;

  // Scavengers
  scavenger == 0 ? scavengerText.innerText = `0 scavenger/s` : scavengerText.innerText = `${scavenger.amount} scavenger/s`;
  scavengerTooltip.innerHTML = `Scavengers gather scrap (metal and circuitry) for you! <br> Cost: ${scavenger.humanCost} human, ${Math.trunc(scavenger.foodCost * 10) / 10} food, ${Math.trunc(scavenger.woodCost * 10) / 10} wood, ${Math.trunc(scavenger.stoneCost * 10) / 10} stone, ${Math.trunc(scavenger.scrapCost * 10) / 10} scrap <br> <i>'Scavenging in the abandoned cities is a dangerous endeavor. <br> Mutants are everywhere...'</i>`;

  // Drone Builders
  droneBuilder == 0 ? droneBuilderText.innerText = `0 drone builder/s` : droneBuilderText.innerText = `${droneBuilder.amount} drone builder/s`;
  droneBuilderTooltip.innerHTML = `Drone builders build... drones. For you!!! <br> Cost: ${droneBuilder.humanCost} human, ${Math.trunc(droneBuilder.foodCost * 10) / 10} food, ${Math.trunc(droneBuilder.woodCost * 10) / 10} wood, ${Math.trunc(droneBuilder.stoneCost * 10) / 10} stone, ${Math.trunc(droneBuilder.scrapCost * 10) / 10} scrap, ${Math.trunc(droneBuilder.droneCost * 10) / 10} drone/s <br> <i>'Pray your workers don't realize they're making the things that are going to replace them one day.'</i>`;

  // Upgrades
  if (upgradeOne.active == true) {
    upgradeOneButton.disabled = 'true';
    upgradeOneButton.classList.add('bought');
  }
  if (upgradeTwo.active == true) {
    upgradeTwoButton.disabled = 'true';
    upgradeTwoButton.classList.add('bought');
  }
  if (upgradeThree.active == true) {
    upgradeThreeButton.disabled = 'true';
    upgradeThreeButton.classList.add('bought');
  }
  if (upgradeFour.active == true) {
    upgradeFourButton.disabled = 'true';
    upgradeFourButton.classList.add('bought');
  }
  if (upgradeFive.active == true) {
    upgradeFiveButton.disabled = 'true';
    upgradeFiveButton.classList.add('bought');
  }
  if (upgradeSix.active == true) {
    upgradeSixButton.disabled = 'true';
    upgradeSixButton.classList.add('bought');
  }
  if (upgradeSeven.active == true) {
    upgradeSevenButton.disabled = 'true';
    upgradeSevenButton.classList.add('bought');
  }
  if (upgradeEight.active == true) {
    upgradeEightButton.disabled = 'true';
    upgradeEightButton.classList.add('bought');
  }
  if (upgradeNine.active == true) {
    upgradeNineButton.disabled = 'true';
    upgradeNineButton.classList.add('bought');
  }
  if (upgradeTen.active == true) {
    upgradeTenButton.disabled = 'true';
    upgradeTenButton.classList.add('bought');
  }
  if (upgradeEleven.active == true) {
    upgradeElevenButton.disabled = 'true';
    upgradeElevenButton.classList.add('bought');
  }
  if (upgradeTwelve.active == true) {
    upgradeTwelveButton.disabled = 'true';
    upgradeTwelveButton.classList.add('bought');
  }
  if (upgradeThirteen.active == true) {
    upgradeThirteenButton.disabled = 'true';
    upgradeThirteenButton.classList.add('bought');
  }
  if (upgradeFourteen.active == true) {
    upgradeFourteenButton.disabled = 'true';
    upgradeFourteenButton.classList.add('bought');
  }
  if (upgradeFifteen.active == true) {
    upgradeFifteenButton.disabled = 'true';
    upgradeFifteenButton.classList.add('bought');
  }
  if (upgradeSixteen.active == true) {
    upgradeSixteenButton.disabled = 'true';
    upgradeSixteenButton.classList.add('bought');
  }
  if (upgradeSeventeen.active == true) {
    upgradeSeventeenButton.disabled = 'true';
    upgradeSeventeenButton.classList.add('bought');
  }
  if (upgradeEighteen.active == true) {
    upgradeEighteenButton.disabled = 'true';
    upgradeEighteenButton.classList.add('bought');
  }
  if (upgradeNineteen.active == true) {
    upgradeNineteenButton.disabled = 'true';
    upgradeNineteenButton.classList.add('bought');
  }
  if (upgradeTwenty.active == true) {
    upgradeTwentyButton.disabled = 'true';
    upgradeTwentyButton.classList.add('bought');
  }
  if (upgradeTwentyone.active == true) {
    upgradeTwentyoneButton.disabled = 'true';
    upgradeTwentyoneButton.classList.add('bought');
  }
  if (upgradeTwentytwo.active == true) {
    upgradeTwentytwoButton.disabled = 'true';
    upgradeTwentytwoButton.classList.add('bought');
  }
  if (upgradeTwentythree.active == true) {
    upgradeTwentythreeButton.disabled = 'true';
    upgradeTwentythreeButton.classList.add('bought');
  }
  if (upgradeTwentyfour.active == true) {
    upgradeTwentyfourButton.disabled = 'true';
    upgradeTwentyfourButton.classList.add('bought');
  }
  if (upgradeTwentyfive.active == true) {
    upgradeTwentyfiveButton.disabled = 'true';
    upgradeTwentyfiveButton.classList.add('bought');
  }
  if (upgradeTwentysix.active == true) {
    upgradeTwentysixButton.disabled = 'true';
    upgradeTwentysixButton.classList.add('bought');
  }
  if (upgradeTwentyseven.active == true) {
    upgradeTwentysevenButton.disabled = 'true';
    upgradeTwentysevenButton.classList.add('bought');
  }
  if (upgradeTwentyeight.active == true) {
    upgradeTwentyeightButton.disabled = 'true';
    upgradeTwentyeightButton.classList.add('bought');
  }
  if (upgradeTwentynine.active == true) {
    upgradeTwentynineButton.disabled = 'true';
    upgradeTwentynineButton.classList.add('bought');
  }
  //template
  if (upgradeNumber.active == true) {
    upgradeNumberButton.disabled = 'true';
    upgradeNumberButton.classList.add('bought');
  }

  // Update population status
  updateHumanSectionStatus();
}

// If the amount of humans is over a certain number, update the status of the population.
// Add more statuses!
function updateHumanSectionStatus() {
  if (value.population >= 100000) {
    humanSectionStatus.innerText = "🗾Country";
  } else if (value.population >= 10000) {
    humanSectionStatus.innerText = "🏙️City";
  } else if (value.population >= 1000) {
    humanSectionStatus.innerText = "🏛️Town";
  } else if (value.population >= 100) {
    humanSectionStatus.innerText = "🏠Village";
  } else if (value.population >= 10) {
    humanSectionStatus.innerText = "🏕️Campground";
  } else {
    humanSectionStatus.innerText = "🏜️Wasteland";
  }
}


// =============================================================== //
// ======================== GET FOOD HERE ======================== //
// =============================================================== //

// Click to get food.
addFoodButton.addEventListener('click', () => {
  value.food += value.clickPower;
  updateText();
});

// =============================================================== //
// =========================== GET HUMANS HERE ============================ //
// =============================================================== //

// If you click the button, you will lose 50 food and gain 1 human.
humanButton.addEventListener('click', () => {
  if (value.food >= value.foodToHumanCost) {
    value.food -= value.foodToHumanCost;
    value.foodToHumanCost *= 1.1;
    value.human += 1;
    value.population += 1;
    updateText();
  }
});

// =============================================================== //
// ========================= PRODUCTION ========================== //
// =============================================================== //

// Production class constructor
class Production {
  constructor(name, description, amount, production, multiplier, humanCost, foodCost, woodCost, stoneCost, scrapCost, droneCost) {
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.production = production;
    this.multiplier = multiplier;
    this.humanCost = humanCost;
    this.foodCost = foodCost;
    this.woodCost = woodCost;
    this.stoneCost = stoneCost;
    this.scrapCost = scrapCost;
    this.droneCost = droneCost; 
  }
}

// Farmer
let farmer = JSON.parse(localStorage.getItem("farmer"));
if (farmer == null) {
  farmer = new Production('Farmer', 'Farmers gather food.', 0, 0, 0.1, 1, 10, 0, 0, 0, 0);
  localStorage.setItem("farmer", JSON.stringify(farmer));
}
farmerButton.addEventListener('click', () => {
  if (value.human >= farmer.humanCost && value.food >= farmer.foodCost) {
    value.human -= farmer.humanCost;
    value.food -= farmer.foodCost;
    farmer.amount += 1;
    farmer.foodCost *= 1.1;
    farmer.production += farmer.multiplier;
    updateText();
  }
});

// Lumberjack
let lumberjack = JSON.parse(localStorage.getItem("lumberjack"));
if (lumberjack == null) {
  lumberjack = new Production('Lumberjack', 'Lumberjacks gather wood.', 0, 0, 0.1, 1, 100, 10, 0, 0, 0);
  localStorage.setItem("lumberjack", JSON.stringify(lumberjack));
}
lumberjackButton.addEventListener('click', () => {
  if (value.human >= lumberjack.humanCost && value.food >= lumberjack.foodCost && value.wood >= lumberjack.woodCost) {
    value.human -= lumberjack.humanCost;
    value.food -= lumberjack.foodCost;
    value.wood -= lumberjack.woodCost;
    lumberjack.amount += 1;
    lumberjack.foodCost *= 1.1;
    lumberjack.woodCost *= 1.1;
    lumberjack.production += lumberjack.multiplier;
    updateText();
  }
})

// Miner
let miner = JSON.parse(localStorage.getItem("miner"));
if (miner == null) {
  miner = new Production('Miner', 'Miners gather stone.', 0, 0, 0.1, 1, 1000, 100, 10, 0, 0);
  localStorage.setItem("miner", JSON.stringify(miner));
}
minerButton.addEventListener('click', () => {
  if (value.human >= miner.humanCost && 
    value.food >= miner.foodCost && 
    value.wood >= miner.woodCost && 
    value.stone >= miner.stoneCost) {
    value.human -= miner.humanCost;
    value.food -= miner.foodCost;
    value.wood -= miner.woodCost;
    value.stone -= miner.stoneCost;
    miner.amount += 1;
    miner.foodCost *= 1.1;
    miner.woodCost *= 1.1;
    miner.stoneCost *= 1.1;
    miner.production += miner.multiplier;
    updateText();
  }
})

// Scavenger
let scavenger = JSON.parse(localStorage.getItem("scavenger"));
if (scavenger == null) {
  scavenger = new Production('Scavenger', 'Scavengers gather scrap.', 0, 0, 0.1, 1, 10000, 1000, 100, 10, 0);
  localStorage.setItem("scavenger", JSON.stringify(scavenger));
}
scavengerButton.addEventListener('click', () => {
  if (value.human >= scavenger.humanCost && 
    value.food >= scavenger.foodCost && 
    value.wood >= scavenger.woodCost && 
    value.stone >= scavenger.stoneCost &&
    value.scrap >= scavenger.scrapCost) {
    value.human -= scavenger.humanCost;
    value.food -= scavenger.foodCost;
    value.wood -= scavenger.woodCost;
    value.stone -= scavenger.stoneCost;
    value.scrap -= scavenger.scrapCost;
    scavenger.amount += 1;
    scavenger.foodCost *= 1.1;
    scavenger.woodCost *= 1.1;
    scavenger.stoneCost *= 1.1;
    scavenger.scrapCost *= 1.1;
    scavenger.production += scavenger.multiplier;
    updateText();
  }
})

// Drone Builder
let droneBuilder = JSON.parse(localStorage.getItem("droneBuilder"));
if (droneBuilder == null) {
  droneBuilder = new Production('Drone Builder', 'Drone builders... build drones.', 0, 0, 0.1, 1, 100000, 10000, 1000, 100, 1);
  localStorage.setItem("droneBuilder", JSON.stringify(droneBuilder));
}
droneBuilderButton.addEventListener('click', () => {
  if (value.human >= droneBuilder.humanCost && 
    value.food >= droneBuilder.foodCost && 
    value.wood >= droneBuilder.woodCost && 
    value.stone >= droneBuilder.stoneCost &&
    value.scrap >= droneBuilder.scrapCost &&
    value.drone >= droneBuilder.droneCost) {
    value.human -= droneBuilder.humanCost;
    value.food -= droneBuilder.foodCost;
    value.wood -= droneBuilder.woodCost;
    value.stone -= droneBuilder.stoneCost;
    value.scrap -= droneBuilder.scrapCost;
    value.drone -= droneBuilder.droneCost;
    droneBuilder.amount += 1;
    droneBuilder.foodCost *= 1.1;
    droneBuilder.woodCost *= 1.1;
    droneBuilder.stoneCost *= 1.1;
    droneBuilder.scrapCost *= 1.1;
    droneBuilder.droneCost *= 1.1;
    droneBuilder.production += droneBuilder.multiplier;
    updateText();
  }
})

// =============================================================== //
// ========================= UPGRADES ========================== //
// =============================================================== //

// Class Constructor

class Upgrade {
  constructor(name, description, active, humanCost, foodCost, woodCost, stoneCost, scrapCost, droneCost) {
    this.name = name;
    this.description = description;
    this.active = active;
    this.humanCost = humanCost;
    this.foodCost = foodCost;
    this.woodCost = woodCost;
    this.stoneCost = stoneCost;
    this.scrapCost = scrapCost;
    this.droneCost = droneCost;
  }
}

// Upgrade One == Two hands
let upgradeOne = JSON.parse(localStorage.getItem("upgradeOne"));


if (upgradeOne == null) {
  upgradeOne = new Upgrade('Two hands', 'Click Power + 1', false, 0, 50, 0, 0, 0, 0);
  localStorage.setItem("upgradeOne", JSON.stringify(upgradeOne));
}
upgradeOneButton.addEventListener('click', () => {
  if (value.food >= upgradeOne.foodCost) {
    value.food -= upgradeOne.foodCost;
    upgradeOne.active = true;
    value.clickPower += 1;
    updateText();
  }
})

// Upgrade Two == Breeding
let upgradeTwo = JSON.parse(localStorage.getItem("upgradeTwo"));
//upgradeTwoButton.classList.add('hidden');
if (upgradeTwo == null) {
  upgradeTwo = new Upgrade('Breeding', 'Human Production + 0.1', false, 2, 100, 0, 0, 0, 0);
  localStorage.setItem("upgradeTwo", JSON.stringify(upgradeTwo));
}
upgradeTwoButton.addEventListener('click', () => {
  if (value.human >= upgradeTwo.humanCost && value.food >= upgradeTwo.foodCost) {
    value.human -= upgradeTwo.humanCost;
    value.food -= upgradeTwo.foodCost;
    upgradeTwo.active = true;
    value.humanProduction += 0.1;
    value.populationProduction += 0.1;
    updateText();
  }
})

// Upgrade Three == Full Belly
let upgradeThree = JSON.parse(localStorage.getItem("upgradeThree"));
if (upgradeThree == null) {
  upgradeThree = new Upgrade('Full Belly', 'x10 Farmer Production', false, 0, 500, 0, 0, 0, 0);
  localStorage.setItem("upgradeThree", JSON.stringify(upgradeThree));
}
upgradeThreeButton.addEventListener('click', () => {
  if (value.food >= upgradeThree.foodCost) {
    value.food -= upgradeThree.foodCost;
    upgradeThree.active = true;
    farmer.multiplier *= 10;
    updateText();
  }
})

// Upgrade Four == Explore the Forest
let upgradeFour = JSON.parse(localStorage.getItem("upgradeFour"));
if (upgradeFour == null) {
  upgradeFour = new Upgrade('Explore the Forest', 'Get 100 wood', false, 10, 1000, 0, 0, 0, 0);
  localStorage.setItem("upgradeFour", JSON.stringify(upgradeFour));
}
upgradeFourButton.addEventListener('click', () => {
  if (value.human >= upgradeFour.humanCost && value.food >= upgradeFour.foodCost) {
    value.human -= upgradeFour.humanCost;
    value.food -= upgradeFour.foodCost;
    upgradeFour.active = true;
    value.wood += 100;
    updateText();
  }
})

// Upgrade Five == Advanced Wilderness Skills
let upgradeFive = JSON.parse(localStorage.getItem("upgradeFive"));
if (upgradeFive == null) {
  upgradeFive = new Upgrade('Advanced Wilderness Skills', 'Click Power + 8', false, 0, 2500, 0, 0, 0, 0);
  localStorage.setItem("upgradeFive", JSON.stringify(upgradeFive));
}
upgradeFiveButton.addEventListener('click', () => {
  if (value.food >= upgradeFive.foodCost) {
    value.food -= upgradeFive.foodCost;
    upgradeFive.active = true;
    value.clickPower += 8;
    updateText();
  }
})

// Upgrade Six == Stork
let upgradeSix = JSON.parse(localStorage.getItem("upgradeSix"));
if (upgradeSix == null) {
  upgradeSix = new Upgrade('Stork', '+ 0.9 Human Production', false, 15, 5000, 0, 0, 0, 0);
  localStorage.setItem("upgradeSix", JSON.stringify(upgradeSix));
}
upgradeSixButton.addEventListener('click', () => {
  if (value.human >= upgradeSix.humanCost && value.food >= upgradeSix.foodCost) {
    value.human -= upgradeSix.humanCost;
    value.food -= upgradeSix.foodCost;
    upgradeSix.active = true;
    value.humanProduction += 0.9;
    value.populationProduction += 0.9;
    updateText();
  }
})

// Upgrade Seven == Better Farming Tools
let upgradeSeven = JSON.parse(localStorage.getItem("upgradeSeven"));
if (upgradeSeven == null) {
  upgradeSeven = new Upgrade('Better Farming Tools', 'x10 Farmer Production', false, 0, 0, 50, 0, 0, 0);
  localStorage.setItem("upgradeSeven", JSON.stringify(upgradeSeven));
}
upgradeSevenButton.addEventListener('click', () => {
  if (value.wood >= upgradeSeven.woodCost) {
    value.wood -= upgradeSeven.woodCost;
    upgradeSeven.active = true;
    farmer.multiplier *= 10;
    updateText();
  }
})

// Ugprade Eight == Sacrifice to the Wood Gods
let upgradeEight = JSON.parse(localStorage.getItem("upgradeEight"));
if (upgradeEight == null) {
  upgradeEight = new Upgrade('Sacrifice to the Wood Gods', 'x2 Lumberjack Production', false, 50, 5000, 0, 0, 0, 0);
  localStorage.setItem("upgradeEight", JSON.stringify(upgradeEight));
}
upgradeEightButton.addEventListener('click', () => {
  if (value.human >= upgradeEight.humanCost && value.food >= upgradeEight.foodCost) {
    value.human -= upgradeEight.humanCost;
    value.food -= upgradeEight.foodCost;
    upgradeEight.active = true;
    lumberjack.multiplier *= 10;
    updateText();
  }
})

// Upgrade Nine == Explore the Quarry
let upgradeNine = JSON.parse(localStorage.getItem("upgradeNine"));
if (upgradeNine == null) {
  upgradeNine = new Upgrade('Explore the Quarry', 'Gather 100 stone.', false, 10, 10000, 250, 0, 0, 0);
  localStorage.setItem("upgradeNine", JSON.stringify(upgradeNine));
}
upgradeNineButton.addEventListener('click', () => {
  if (value.human >= upgradeNine.humanCost && value.food >= upgradeNine.foodCost && value.wood >= upgradeNine.woodCost) {
    value.human -= upgradeNine.humanCost;
    value.food -= upgradeNine.foodCost;
    value.wood -= upgradeNine.woodCost;
    upgradeNine.active = true;
    value.stone += 100;
    updateText();
  }
})

// Upgrade Ten == Brain Power!!!
let upgradeTen = JSON.parse(localStorage.getItem("upgradeTen"));
if (upgradeTen == null) {
  upgradeTen = new Upgrade('Brain Power!!!', 'Click Power + 15', false, 0, 20000, 0, 0, 0, 0);
  localStorage.setItem("upgradeTen", JSON.stringify(upgradeTen));
}
upgradeTenButton.addEventListener('click', () => {
  if (value.food >= upgradeTen.foodCost) {
    value.food -= upgradeTen.foodCost;
    upgradeTen.active = true;
    value.clickPower += 15;
    updateText();
  }
})

// Upgrade Eleven == Stone Age
let upgradeEleven = JSON.parse(localStorage.getItem("upgradeEleven"));
if (upgradeEleven == null) {
  upgradeEleven = new Upgrade('Stone Age', 'Description', false, 0, 0, 0, 50, 0, 0);
  localStorage.setItem("upgradeEleven", JSON.stringify(upgradeEleven));
}
upgradeElevenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeEleven.humanCost &&
    value.food >= upgradeEleven.foodCost &&
    value.wood >= upgradeEleven.woodCost &&
    value.stone >= upgradeEleven.stoneCost &&
    value.scrap >= upgradeEleven.scrapCost &&
    value.drone >= upgradeEleven.droneCost
  ) {
    value.human -= upgradeEleven.humanCost;
    value.food -= upgradeEleven.foodCost;
    value.wood -= upgradeEleven.woodCost;
    value.stone -= upgradeEleven.stoneCost;
    value.scrap -= upgradeEleven.scrapCost;
    value.drone -= upgradeEleven.droneCost;
    upgradeEleven.active = true;
    farmer.multiplier *= 10;
    updateText();
  }
})

// Upgrade Twelve == Architecture
let upgradeTwelve = JSON.parse(localStorage.getItem("upgradeTwelve"));
if (upgradeTwelve == null) {
  upgradeTwelve = new Upgrade('Architecture', 'Description', false, 20, 20000, 500, 20, 0, 0);
  localStorage.setItem("upgradeTwelve", JSON.stringify(upgradeTwelve));
}
upgradeTwelveButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwelve.humanCost &&
    value.food >= upgradeTwelve.foodCost &&
    value.wood >= upgradeTwelve.woodCost &&
    value.stone >= upgradeTwelve.stoneCost &&
    value.scrap >= upgradeTwelve.scrapCost &&
    value.drone >= upgradeTwelve.droneCost
  ) {
    value.human -= upgradeTwelve.humanCost;
    value.food -= upgradeTwelve.foodCost;
    value.wood -= upgradeTwelve.woodCost;
    value.stone -= upgradeTwelve.stoneCost;
    value.scrap -= upgradeTwelve.scrapCost;
    value.drone -= upgradeTwelve.droneCost;
    upgradeTwelve.active = true;
    value.humanProduction += 9;
    updateText();
  }
})

// Upgrade Thirteen == The Power of Steve
let upgradeThirteen = JSON.parse(localStorage.getItem("upgradeThirteen"));
if (upgradeThirteen == null) {
  upgradeThirteen = new Upgrade('Name', 'Description', false, 0, 0, 1000, 0, 0, 0);
  localStorage.setItem("upgradeThirteen", JSON.stringify(upgradeThirteen));
}
upgradeThirteenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeThirteen.humanCost &&
    value.food >= upgradeThirteen.foodCost &&
    value.wood >= upgradeThirteen.woodCost &&
    value.stone >= upgradeThirteen.stoneCost &&
    value.scrap >= upgradeThirteen.scrapCost &&
    value.drone >= upgradeThirteen.droneCost
  ) {
    value.human -= upgradeThirteen.humanCost;
    value.food -= upgradeThirteen.foodCost;
    value.wood -= upgradeThirteen.woodCost;
    value.stone -= upgradeThirteen.stoneCost;
    value.scrap -= upgradeThirteen.scrapCost;
    value.drone -= upgradeThirteen.droneCost;
    upgradeThirteen.active = true;
    lumberjack.multiplier *= 10;
    updateText();
  }
})

// Upgrade Fourteen == Sculptures
let upgradeFourteen = JSON.parse(localStorage.getItem("upgradeFourteen"));
if (upgradeFourteen == null) {
  upgradeFourteen = new Upgrade('Name', 'Description', false, 1, 40000, 100, 0, 0, 0);
  localStorage.setItem("upgradeFourteen", JSON.stringify(upgradeFourteen));
}
upgradeFourteenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeFourteen.humanCost &&
    value.food >= upgradeFourteen.foodCost &&
    value.wood >= upgradeFourteen.woodCost &&
    value.stone >= upgradeFourteen.stoneCost &&
    value.scrap >= upgradeFourteen.scrapCost &&
    value.drone >= upgradeFourteen.droneCost
  ) {
    value.human -= upgradeFourteen.humanCost;
    value.food -= upgradeFourteen.foodCost;
    value.wood -= upgradeFourteen.woodCost;
    value.stone -= upgradeFourteen.stoneCost;
    value.scrap -= upgradeFourteen.scrapCost;
    value.drone -= upgradeFourteen.droneCost;
    upgradeFourteen.active = true;
    miner.multiplier *= 10;
    updateText();
  }
})

// Upgrade Fifteen == Explore the Abandoned City
let upgradeFifteen = JSON.parse(localStorage.getItem("upgradeFifteen"));
if (upgradeFifteen == null) {
  upgradeFifteen = new Upgrade('Name', 'Description', false, 0, 60000, 10000, 800, 0, 0);
  localStorage.setItem("upgradeFifteen", JSON.stringify(upgradeFifteen));
}
upgradeFifteenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeFifteen.humanCost &&
    value.food >= upgradeFifteen.foodCost &&
    value.wood >= upgradeFifteen.woodCost &&
    value.stone >= upgradeFifteen.stoneCost &&
    value.scrap >= upgradeFifteen.scrapCost &&
    value.drone >= upgradeFifteen.droneCost
  ) {
    value.human -= upgradeFifteen.humanCost;
    value.food -= upgradeFifteen.foodCost;
    value.wood -= upgradeFifteen.woodCost;
    value.stone -= upgradeFifteen.stoneCost;
    value.scrap -= upgradeFifteen.scrapCost;
    value.drone -= upgradeFifteen.droneCost;
    upgradeFifteen.active = true;
    value.scrap += 100;
    updateText();
  }
})

// Upgrade Sixteen == Tractors
let upgradeSixteen = JSON.parse(localStorage.getItem("upgradeSixteen"));
if (upgradeSixteen == null) {
  upgradeSixteen = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 100, 0);
  localStorage.setItem("upgradeSixteen", JSON.stringify(upgradeSixteen));
}
upgradeSixteenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeSixteen.humanCost &&
    value.food >= upgradeSixteen.foodCost &&
    value.wood >= upgradeSixteen.woodCost &&
    value.stone >= upgradeSixteen.stoneCost &&
    value.scrap >= upgradeSixteen.scrapCost &&
    value.drone >= upgradeSixteen.droneCost
  ) {
    value.human -= upgradeSixteen.humanCost;
    value.food -= upgradeSixteen.foodCost;
    value.wood -= upgradeSixteen.woodCost;
    value.stone -= upgradeSixteen.stoneCost;
    value.scrap -= upgradeSixteen.scrapCost;
    value.drone -= upgradeSixteen.droneCost;
    upgradeSixteen.active = true;
    farmer.multiplier *= 10;
    updateText();
  }
})

// Upgrade Seventeen == Luck +777
let upgradeSeventeen = JSON.parse(localStorage.getItem("upgradeSeventeen"));
if (upgradeSeventeen == null) {
  upgradeSeventeen = new Upgrade('Name', 'Description', false, 0, 77777, 0, 0, 0, 0);
  localStorage.setItem("upgradeSeventeen", JSON.stringify(upgradeSeventeen));
}
upgradeSeventeenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeSeventeen.humanCost &&
    value.food >= upgradeSeventeen.foodCost &&
    value.wood >= upgradeSeventeen.woodCost &&
    value.stone >= upgradeSeventeen.stoneCost &&
    value.scrap >= upgradeSeventeen.scrapCost &&
    value.drone >= upgradeSeventeen.droneCost
  ) {
    value.human -= upgradeSeventeen.humanCost;
    value.food -= upgradeSeventeen.foodCost;
    value.wood -= upgradeSeventeen.woodCost;
    value.stone -= upgradeSeventeen.stoneCost;
    value.scrap -= upgradeSeventeen.scrapCost;
    value.drone -= upgradeSeventeen.droneCost;
    upgradeSeventeen.active = true;
    value.clickPower += 777;
    updateText();
  }
})

// Upgrade Eighteen == Society
let upgradeEighteen = JSON.parse(localStorage.getItem("upgradeEighteen"));
if (upgradeEighteen == null) {
  upgradeEighteen = new Upgrade('Name', 'Description', false, 5000, 100000, 10000, 1000, 100, 0);
  localStorage.setItem("upgradeEighteen", JSON.stringify(upgradeEighteen));
}
upgradeEighteenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeEighteen.humanCost &&
    value.food >= upgradeEighteen.foodCost &&
    value.wood >= upgradeEighteen.woodCost &&
    value.stone >= upgradeEighteen.stoneCost &&
    value.scrap >= upgradeEighteen.scrapCost &&
    value.drone >= upgradeEighteen.droneCost
  ) {
    value.human -= upgradeEighteen.humanCost;
    value.food -= upgradeEighteen.foodCost;
    value.wood -= upgradeEighteen.woodCost;
    value.stone -= upgradeEighteen.stoneCost;
    value.scrap -= upgradeEighteen.scrapCost;
    value.drone -= upgradeEighteen.droneCost;
    upgradeEighteen.active = true;
    value.humanProduction += 90;
    updateText();
  }
})

// Upgrade Nineteen == Chainsaws
let upgradeNineteen = JSON.parse(localStorage.getItem("upgradeNineteen"));
if (upgradeNineteen == null) {
  upgradeNineteen = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 500, 0);
  localStorage.setItem("upgradeNineteen", JSON.stringify(upgradeNineteen));
}
upgradeNineteenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeNineteen.humanCost &&
    value.food >= upgradeNineteen.foodCost &&
    value.wood >= upgradeNineteen.woodCost &&
    value.stone >= upgradeNineteen.stoneCost &&
    value.scrap >= upgradeNineteen.scrapCost &&
    value.drone >= upgradeNineteen.droneCost
  ) {
    value.human -= upgradeNineteen.humanCost;
    value.food -= upgradeNineteen.foodCost;
    value.wood -= upgradeNineteen.woodCost;
    value.stone -= upgradeNineteen.stoneCost;
    value.scrap -= upgradeNineteen.scrapCost;
    value.drone -= upgradeNineteen.droneCost;
    upgradeNineteen.active = true;
    lumberjack.multiplier *= 10;
    updateText();
  }
})

// Upgrade Twenty == 🗿
let upgradeTwenty = JSON.parse(localStorage.getItem("upgradeTwenty"));
if (upgradeTwenty == null) {
  upgradeTwenty = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 1000, 0);
  localStorage.setItem("upgradeTwenty", JSON.stringify(upgradeTwenty));
}
upgradeTwentyButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwenty.humanCost &&
    value.food >= upgradeTwenty.foodCost &&
    value.wood >= upgradeTwenty.woodCost &&
    value.stone >= upgradeTwenty.stoneCost &&
    value.scrap >= upgradeTwenty.scrapCost &&
    value.drone >= upgradeTwenty.droneCost
  ) {
    value.human -= upgradeTwenty.humanCost;
    value.food -= upgradeTwenty.foodCost;
    value.wood -= upgradeTwenty.woodCost;
    value.stone -= upgradeTwenty.stoneCost;
    value.scrap -= upgradeTwenty.scrapCost;
    value.drone -= upgradeTwenty.droneCost;
    upgradeTwenty.active = true;
    miner.multiplier *= 10;
    updateText();
  }
})

// Upgrade Twentyone == No Fear
let upgradeTwentyone = JSON.parse(localStorage.getItem("upgradeTwentyone"));
if (upgradeTwentyone == null) {
  upgradeTwentyone = new Upgrade('Name', 'Description', false, 0, 250000, 0, 0, 0, 0);
  localStorage.setItem("upgradeTwentyone", JSON.stringify(upgradeTwentyone));
}
upgradeTwentyoneButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentyone.humanCost &&
    value.food >= upgradeTwentyone.foodCost &&
    value.wood >= upgradeTwentyone.woodCost &&
    value.stone >= upgradeTwentyone.stoneCost &&
    value.scrap >= upgradeTwentyone.scrapCost &&
    value.drone >= upgradeTwentyone.droneCost
  ) {
    value.human -= upgradeTwentyone.humanCost;
    value.food -= upgradeTwentyone.foodCost;
    value.wood -= upgradeTwentyone.woodCost;
    value.stone -= upgradeTwentyone.stoneCost;
    value.scrap -= upgradeTwentyone.scrapCost;
    value.drone -= upgradeTwentyone.droneCost;
    upgradeTwentyone.active = true;
    scavenger.multiplier *= 10;
    updateText();
  }
})

// Upgrade Twentytwo == The Third Hand
let upgradeTwentytwo = JSON.parse(localStorage.getItem("upgradeTwentytwo"));
if (upgradeTwentytwo == null) {
  upgradeTwentytwo = new Upgrade('Name', 'Description', false, 0, 1333333, 0, 0, 0, 0);
  localStorage.setItem("upgradeTwentytwo", JSON.stringify(upgradeTwentytwo));
}
upgradeTwentytwoButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentytwo.humanCost &&
    value.food >= upgradeTwentytwo.foodCost &&
    value.wood >= upgradeTwentytwo.woodCost &&
    value.stone >= upgradeTwentytwo.stoneCost &&
    value.scrap >= upgradeTwentytwo.scrapCost &&
    value.drone >= upgradeTwentytwo.droneCost
  ) {
    value.human -= upgradeTwentytwo.humanCost;
    value.food -= upgradeTwentytwo.foodCost;
    value.wood -= upgradeTwentytwo.woodCost;
    value.stone -= upgradeTwentytwo.stoneCost;
    value.scrap -= upgradeTwentytwo.scrapCost;
    value.drone -= upgradeTwentytwo.droneCost;
    upgradeTwentytwo.active = true;
    value.clickPower += 333333;
    updateText();
  }
})

// Upgrade Twentythree == Endless Perpetuity
let upgradeTwentythree = JSON.parse(localStorage.getItem("upgradeTwentythree"));
if (upgradeTwentythree == null) {
  upgradeTwentythree = new Upgrade('Name', 'Description', false, 0, 2000000, 0, 0, 0, 0);
  localStorage.setItem("upgradeTwentythree", JSON.stringify(upgradeTwentythree));
}
upgradeTwentythreeButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentythree.humanCost &&
    value.food >= upgradeTwentythree.foodCost &&
    value.wood >= upgradeTwentythree.woodCost &&
    value.stone >= upgradeTwentythree.stoneCost &&
    value.scrap >= upgradeTwentythree.scrapCost &&
    value.drone >= upgradeTwentythree.droneCost
  ) {
    value.human -= upgradeTwentythree.humanCost;
    value.food -= upgradeTwentythree.foodCost;
    value.wood -= upgradeTwentythree.woodCost;
    value.stone -= upgradeTwentythree.stoneCost;
    value.scrap -= upgradeTwentythree.scrapCost;
    value.drone -= upgradeTwentythree.droneCost;
    upgradeTwentythree.active = true;
    farmer.multiplier *= 100;
    lumberjack.multiplier *= 100;
    miner.multiplier *= 100;
    scavenger.multiplier *= 100;
    updateText();
  }
})

// Upgrade Twentyfour == Human++
let upgradeTwentyfour = JSON.parse(localStorage.getItem("upgradeTwentyfour"));
if (upgradeTwentyfour == null) {
  upgradeTwentyfour = new Upgrade('Name', 'Description', false, 0, 5000000, 0, 0, 0, 0);
  localStorage.setItem("upgradeTwentyfour", JSON.stringify(upgradeTwentyfour));
}
upgradeTwentyfourButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentyfour.humanCost &&
    value.food >= upgradeTwentyfour.foodCost &&
    value.wood >= upgradeTwentyfour.woodCost &&
    value.stone >= upgradeTwentyfour.stoneCost &&
    value.scrap >= upgradeTwentyfour.scrapCost &&
    value.drone >= upgradeTwentyfour.droneCost
  ) {
    value.human -= upgradeTwentyfour.humanCost;
    value.food -= upgradeTwentyfour.foodCost;
    value.wood -= upgradeTwentyfour.woodCost;
    value.stone -= upgradeTwentyfour.stoneCost;
    value.scrap -= upgradeTwentyfour.scrapCost;
    value.drone -= upgradeTwentyfour.droneCost;
    upgradeTwentyfour.active = true;
    farmer.multiplier *= 1000;
    lumberjack.multiplier *= 1000;
    miner.multiplier *= 1000;
    scavenger.multiplier *= 1000;
    updateText();
  }
})

// Upgrade Twentyfive == Build Drone Factory
let upgradeTwentyfive = JSON.parse(localStorage.getItem("upgradeTwentyfive"));
if (upgradeTwentyfive == null) {
  upgradeTwentyfive = new Upgrade('Name', 'Description', false, 0, 0, 1000000, 100000, 10000, 0);
  localStorage.setItem("upgradeTwentyfive", JSON.stringify(upgradeTwentyfive));
}
upgradeTwentyfiveButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentyfive.humanCost &&
    value.food >= upgradeTwentyfive.foodCost &&
    value.wood >= upgradeTwentyfive.woodCost &&
    value.stone >= upgradeTwentyfive.stoneCost &&
    value.scrap >= upgradeTwentyfive.scrapCost &&
    value.drone >= upgradeTwentyfive.droneCost
  ) {
    value.human -= upgradeTwentyfive.humanCost;
    value.food -= upgradeTwentyfive.foodCost;
    value.wood -= upgradeTwentyfive.woodCost;
    value.stone -= upgradeTwentyfive.stoneCost;
    value.scrap -= upgradeTwentyfive.scrapCost;
    value.drone -= upgradeTwentyfive.droneCost;
    upgradeTwentyfive.active = true;
    value.drone += 100;
    updateText();
  }
})

// Upgrade Twentysix == Better Code
let upgradeTwentysix = JSON.parse(localStorage.getItem("upgradeTwentysix"));
if (upgradeTwentysix == null) {
  upgradeTwentysix = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 0, 100);
  localStorage.setItem("upgradeTwentysix", JSON.stringify(upgradeTwentysix));
}
upgradeTwentysixButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentysix.humanCost &&
    value.food >= upgradeTwentysix.foodCost &&
    value.wood >= upgradeTwentysix.woodCost &&
    value.stone >= upgradeTwentysix.stoneCost &&
    value.scrap >= upgradeTwentysix.scrapCost &&
    value.drone >= upgradeTwentysix.droneCost
  ) {
    value.human -= upgradeTwentysix.humanCost;
    value.food -= upgradeTwentysix.foodCost;
    value.wood -= upgradeTwentysix.woodCost;
    value.stone -= upgradeTwentysix.stoneCost;
    value.scrap -= upgradeTwentysix.scrapCost;
    value.drone -= upgradeTwentysix.droneCost;
    upgradeTwentysix.active = true;
    droneBuilder.multiplier *= 10;
    updateText();
  }
})

// Upgrade Twentyseven == Frameworks
let upgradeTwentyseven = JSON.parse(localStorage.getItem("upgradeTwentyseven"));
if (upgradeTwentyseven == null) {
  upgradeTwentyseven = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 0, 1000);
  localStorage.setItem("upgradeTwentyseven", JSON.stringify(upgradeTwentyseven));
}
upgradeTwentysevenButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentyseven.humanCost &&
    value.food >= upgradeTwentyseven.foodCost &&
    value.wood >= upgradeTwentyseven.woodCost &&
    value.stone >= upgradeTwentyseven.stoneCost &&
    value.scrap >= upgradeTwentyseven.scrapCost &&
    value.drone >= upgradeTwentyseven.droneCost
  ) {
    value.human -= upgradeTwentyseven.humanCost;
    value.food -= upgradeTwentyseven.foodCost;
    value.wood -= upgradeTwentyseven.woodCost;
    value.stone -= upgradeTwentyseven.stoneCost;
    value.scrap -= upgradeTwentyseven.scrapCost;
    value.drone -= upgradeTwentyseven.droneCost;
    upgradeTwentyseven.active = true;
    droneBuilder.multiplier *= 100;
    updateText();
  }
})

// Upgrade Twentyeight == Artificial Intelligence
let upgradeTwentyeight = JSON.parse(localStorage.getItem("upgradeTwentyeight"));
if (upgradeTwentyeight == null) {
  upgradeTwentyeight = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 0, 1000000);
  localStorage.setItem("upgradeTwentyeight", JSON.stringify(upgradeTwentyeight));
}
upgradeTwentyeightButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentyeight.humanCost &&
    value.food >= upgradeTwentyeight.foodCost &&
    value.wood >= upgradeTwentyeight.woodCost &&
    value.stone >= upgradeTwentyeight.stoneCost &&
    value.scrap >= upgradeTwentyeight.scrapCost &&
    value.drone >= upgradeTwentyeight.droneCost
  ) {
    value.human -= upgradeTwentyeight.humanCost;
    value.food -= upgradeTwentyeight.foodCost;
    value.wood -= upgradeTwentyeight.woodCost;
    value.stone -= upgradeTwentyeight.stoneCost;
    value.scrap -= upgradeTwentyeight.scrapCost;
    value.drone -= upgradeTwentyeight.droneCost;
    upgradeTwentyeight.active = true;
    droneBuilder.multiplier *= 1000;
    updateText();
  }
})

// Upgrade Twentynine == Conquer Earth
let upgradeTwentynine = JSON.parse(localStorage.getItem("upgradeTwentynine"));
if (upgradeTwentynine == null) {
  upgradeTwentynine = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 0, 7000000000);
  localStorage.setItem("upgradeTwentynine", JSON.stringify(upgradeTwentynine));
}
upgradeTwentynineButton.addEventListener('click', () => {
  if (
    value.human >= upgradeTwentynine.humanCost &&
    value.food >= upgradeTwentynine.foodCost &&
    value.wood >= upgradeTwentynine.woodCost &&
    value.stone >= upgradeTwentynine.stoneCost &&
    value.scrap >= upgradeTwentynine.scrapCost &&
    value.drone >= upgradeTwentynine.droneCost
  ) {
    value.human -= upgradeTwentynine.humanCost;
    value.food -= upgradeTwentynine.foodCost;
    value.wood -= upgradeTwentynine.woodCost;
    value.stone -= upgradeTwentynine.stoneCost;
    value.scrap -= upgradeTwentynine.scrapCost;
    value.drone -= upgradeTwentynine.droneCost;
    upgradeTwentynine.active = true;
    winModal.style.visibility = 'visible';
    updateText();
  }
})

// Template
let upgradeNumberButton = document.querySelector('.upgrade-one-button');
let upgradeNumber = JSON.parse(localStorage.getItem("upgradeNumber"));
if (upgradeNumber == null) {
  upgradeNumber = new Upgrade('Name', 'Description', false, 0, 0, 0, 0, 0, 0);
  localStorage.setItem("upgradeNumber", JSON.stringify(upgradeNumber));
}
upgradeNumberButton.addEventListener('click', () => {
  if (
    value.human >= upgradeNumber.humanCost &&
    value.food >= upgradeNumber.foodCost &&
    value.wood >= upgradeNumber.woodCost &&
    value.stone >= upgradeNumber.stoneCost &&
    value.scrap >= upgradeNumber.scrapCost &&
    value.drone >= upgradeNumber.droneCost
  ) {
    value.human -= upgradeNumber.humanCost;
    value.food -= upgradeNumber.foodCost;
    value.wood -= upgradeNumber.woodCost;
    value.stone -= upgradeNumber.stoneCost;
    value.scrap -= upgradeNumber.scrapCost;
    value.drone -= upgradeNumber.droneCost;
    upgradeNumber.active = true;
    //effect
    updateText();
  }
})

// =============================================================== //
// ======================== PASSIVE FUNCTIONS ======================== //
// =============================================================== //

// Get passive humans.
function passiveHumans() {
  const passiveHumanInterval = setInterval(() => {
    value.human += value.humanProduction;
    value.population += value.populationProduction;
    updateText();
  }, 1000);
}
passiveHumans();

// Get passive food.
function passiveFood() {
  const passiveFoodInterval = setInterval(() => {
    value.food += farmer.production;
    updateText();
  }, 1000);
}
passiveFood();

// Get passive wood.
function passiveWood() {
  const passiveWoodInterval = setInterval(() => {
    value.wood += lumberjack.production;
    updateText();
  }, 1000)
}
passiveWood();

// Get passive stone.
function passiveStone() {
  const passiveStoneInterval = setInterval(() => {
    value.stone += miner.production;
    updateText();
  }, 1000)
}
passiveStone();

// Get passive scrap.
function passiveScrap() {
  const passiveScrapInterval = setInterval(() => {
    value.scrap += scavenger.production;
    updateText();
  }, 1000)
}
passiveScrap();

// Get passive drones.
function passiveDrone() {
  const passiveWoodInterval = setInterval(() => {
    value.drone += droneBuilder.production;
    updateText();
  }, 1000)
}
passiveDrone();

// =============================================================== //
// ========================= SAVE AND RESET PROGRESS ========================== //
// =============================================================== //

function saveProgress() {
  // Values
  localStorage.setItem("value", JSON.stringify(value));

  // Production

  // Farmer
  localStorage.setItem("farmer", JSON.stringify(farmer));
  // Lumberjack
  localStorage.setItem("lumberjack", JSON.stringify(lumberjack));
  // Miner
  localStorage.setItem("miner", JSON.stringify(miner));
  // Scavenger
  localStorage.setItem("scavenger", JSON.stringify(scavenger));
  // Drone Builder
  localStorage.setItem("droneBuilder", JSON.stringify(droneBuilder));

  // Upgrades

  // Two hands
  localStorage.setItem("upgradeOne", JSON.stringify(upgradeOne));
  // Breeding
  localStorage.setItem("upgradeTwo", JSON.stringify(upgradeTwo));
  // Full Belly
  localStorage.setItem("upgradeThree", JSON.stringify(upgradeThree));
  // Explore the Forest
  localStorage.setItem("upgradeFour", JSON.stringify(upgradeFour));

  localStorage.setItem("upgradeFive", JSON.stringify(upgradeFive));
  localStorage.setItem("upgradeSix", JSON.stringify(upgradeSix));
  localStorage.setItem("upgradeSeven", JSON.stringify(upgradeSeven));
  localStorage.setItem("upgradeEight", JSON.stringify(upgradeEight));
  localStorage.setItem("upgradeNine", JSON.stringify(upgradeNine));
  localStorage.setItem("upgradeTen", JSON.stringify(upgradeTen));
  localStorage.setItem("upgradeEleven", JSON.stringify(upgradeEleven));
  localStorage.setItem("upgradeTwelve", JSON.stringify(upgradeTwelve));
  localStorage.setItem("upgradeThirteen", JSON.stringify(upgradeThirteen));
  localStorage.setItem("upgradeFourteen", JSON.stringify(upgradeFourteen));
  localStorage.setItem("upgradeFifteen", JSON.stringify(upgradeFifteen));
  localStorage.setItem("upgradeSixteen", JSON.stringify(upgradeSixteen));
  localStorage.setItem("upgradeSeventeen", JSON.stringify(upgradeSeventeen));
  localStorage.setItem("upgradeEighteen", JSON.stringify(upgradeEighteen));
  localStorage.setItem("upgradeNineteen", JSON.stringify(upgradeNineteen));
  localStorage.setItem("upgradeTwenty", JSON.stringify(upgradeTwenty));
  localStorage.setItem("upgradeTwentyone", JSON.stringify(upgradeTwentyone));
  localStorage.setItem("upgradeTwentytwo", JSON.stringify(upgradeTwentytwo));
  localStorage.setItem("upgradeTwentythree", JSON.stringify(upgradeTwentythree));
  localStorage.setItem("upgradeTwentyfour", JSON.stringify(upgradeTwentyfour));
  localStorage.setItem("upgradeTwentyfive", JSON.stringify(upgradeTwentyfive));
  localStorage.setItem("upgradeTwentysix", JSON.stringify(upgradeTwentysix));
  localStorage.setItem("upgradeTwentyseven", JSON.stringify(upgradeTwentyseven));
  localStorage.setItem("upgradeTwentyeight", JSON.stringify(upgradeTwentyeight));
  localStorage.setItem("upgradeTwentynine", JSON.stringify(upgradeTwentynine));
  

  // Intialization
  updateText();

  // Change the visibility of the 'Progress saved!' text.
  saveText.style.visibility = "visible";
  setTimeout(() => {saveText.style.visibility = "hidden"}, 3000);
}
saveButton.addEventListener('click', saveProgress);

function resetProgress() {
  // Values
  localStorage.setItem("value", JSON.stringify(null));
  value = {
    food: 0,
    clickPower: 1,
    human: 0,
    foodToHumanCost: 10,
    humanProduction: 0,
    population: 0,
    populationProduction: 0,
    wood: 0,
    stone: 0,
    scrap: 0,
    drone: 0,
  }

  // Production

  // Farmer
  localStorage.setItem("farmer", JSON.stringify(null));
  farmer = new Production('Farmer', 'Farmers gather food.', 0, 0, 0.1, 1, 10, 0, 0, 0, 0);
  // Lumberjack
  localStorage.setItem("lumberjack", JSON.stringify(null));
  lumberjack = new Production('Lumberjack', 'Lumberjacks gather wood.', 0, 0, 0.1, 1, 100, 10, 0, 0, 0);
  // Miner
  localStorage.setItem("miner", JSON.stringify(null));
  miner = new Production('Miner', 'Miners gather stone.', 0, 0, 0.1, 1, 1000, 100, 10, 0, 0);
  // Scavenger
  localStorage.setItem("scavenger", JSON.stringify(null));
  scavenger = new Production('Scavenger', 'Scavengers gather scrap.', 0, 0, 0.1, 1, 10000, 1000, 100, 10, 0);
  // Drone Builder
  localStorage.setItem("droneBuilder", JSON.stringify(null));
  droneBuilder = new Production('Drone Builder', 'Drone builders... build drones.', 0, 0, 0.1, 1, 100000, 10000, 1000, 100, 1);

  // Upgrades

  // Two hands
  localStorage.setItem("upgradeOne", JSON.stringify(null));
  // Breeding
  localStorage.setItem("upgradeTwo", JSON.stringify(null));
  // Full Belly
  localStorage.setItem("upgradeThree", JSON.stringify(null));
  // Explore the Forest
  localStorage.setItem("upgradeFour", JSON.stringify(null));

  localStorage.setItem("upgradeFive", JSON.stringify(null));
  localStorage.setItem("upgradeSix", JSON.stringify(null));
  localStorage.setItem("upgradeSeven", JSON.stringify(null));
  localStorage.setItem("upgradeEight", JSON.stringify(null));
  localStorage.setItem("upgradeNine", JSON.stringify(null));
  localStorage.setItem("upgradeTen", JSON.stringify(null));
  localStorage.setItem("upgradeEleven", JSON.stringify(null));
  localStorage.setItem("upgradeTwelve", JSON.stringify(null));
  localStorage.setItem("upgradeThirteen", JSON.stringify(null));
  localStorage.setItem("upgradeFourteen", JSON.stringify(null));
  localStorage.setItem("upgradeFifteen", JSON.stringify(null));
  localStorage.setItem("upgradeSixteen", JSON.stringify(null));
  localStorage.setItem("upgradeSeventeen", JSON.stringify(null));
  localStorage.setItem("upgradeEighteen", JSON.stringify(null));
  localStorage.setItem("upgradeNineteen", JSON.stringify(null));
  localStorage.setItem("upgradeTwenty", JSON.stringify(null));
  localStorage.setItem("upgradeTwentyone", JSON.stringify(null));
  localStorage.setItem("upgradeTwentytwo", JSON.stringify(null));
  localStorage.setItem("upgradeTwentythree", JSON.stringify(null));
  localStorage.setItem("upgradeTwentyfour", JSON.stringify(null));
  localStorage.setItem("upgradeTwentyfive", JSON.stringify(null));
  localStorage.setItem("upgradeTwentysix", JSON.stringify(null));
  localStorage.setItem("upgradeTwentyseven", JSON.stringify(null));
  localStorage.setItem("upgradeTwentyeight", JSON.stringify(null));
  localStorage.setItem("upgradeTwentynine", JSON.stringify(null));

  // Intialization
  updateText();
}
resetButton.addEventListener('click', resetProgress);

// =============================================================== //
// ========================= INTIALIZATION ========================== //
// =============================================================== //

updateText();
const saveProgressInterval = setInterval(() => {saveProgress()}, 60000);















// the meaning of life is: waffles