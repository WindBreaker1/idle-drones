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

// Save Section
const saveText = document.querySelector(".save-text");
const saveButton = document.querySelector(".save-button");
const resetButton = document.querySelector(".reset-button");

// =============================================================== //
// ======================== COMMONLY USED VARIABLES ========================== //
// =============================================================== //

// make backups in case of null for every variable

// Food
let food = JSON.parse(localStorage.getItem("food"));
let clickPower = 1;

// Human
let population = JSON.parse(localStorage.getItem("population"));
let human = JSON.parse(localStorage.getItem("human"));
let humanCost = JSON.parse(localStorage.getItem("humanCost"))
if (humanCost === null) {
  humanCost = 50;
  JSON.stringify(localStorage.setItem('humanCost', humanCost));
}

// Farmer
let farmer = JSON.parse(localStorage.getItem("farmer"));
let farmerCost = JSON.parse(localStorage.getItem('farmerCost'));
if (farmerCost === null) {
  farmerCost = 10;
  JSON.stringify(localStorage.setItem('farmerCost', farmerCost));
}
let foodProd = JSON.parse(localStorage.getItem("foodProd"));

// =============================================================== //
// ========================= UPDATE DOM ========================== //
// =============================================================== //

// Update all DOM elements when something changes.
function updateText() {
  // If food is equal to null, foodText displays '0 food', else foodText displays the update version
  food == null ? foodText.innerText = `0 food` : foodText.innerText = `${Math.trunc(food * 10) / 10} food (${Math.trunc(foodProd * 10)/10} food/second)`;
  
  updateHumanSectionStatus();
  population == 0 ? populationText.innerText = `Population: 0` : populationText.innerText = `Population: ${population}`;
  human == 0 ? humanText.innerText = `0 human/s` : humanText.innerText = `${human} human/s`;
  humanTooltip.innerHTML = `Humans consume 1 food per second. <br> Cost: ${Math.trunc(humanCost * 10) / 10} food`;
  
  farmer == 0 ? farmerText.innerText = `0 farmer/s` : farmerText.innerText = `${farmer} farmer/s`;
  farmerTooltip.innerHTML = `Farmers plant and gather food for you! <br> Cost: 1 human, ${Math.trunc(farmerCost * 10) / 10} food`;
}

// =============================================================== //
// ======================== GET FOOD HERE ======================== //
// =============================================================== //

// Click to get food.
addFoodButton.addEventListener('click', () => {
  food += clickPower;
  updateText();
});

// Get passive food.
function passiveFood() {
  let isActive = true;
  if (isActive == true) {
    const passiveFoodInterval = setInterval(() => {
      food += foodProd;
      updateText();
    }, 1000);
  }
}
passiveFood();

// =============================================================== //
// ======================== PROGRESSION ========================== //
// =============================================================== //

// =============================================================== //
// =========================== HUMANS ============================ //
// =============================================================== //

// If you click the button, you will lose 50 food and gain 1 human.
humanButton.addEventListener('click', () => {
  if (food >= humanCost) {
    food -= humanCost;
    humanCost *= 1.1;
    human += 1;
    population += 1;
    updateText();
  }
});

// If the amount of humans is over a certain number, update the status of the population.
// Add more statuses!
function updateHumanSectionStatus() {
  if (population >= 10) {
    humanSectionStatus.innerText = "Campground";
  } else if (population >= 100) {
    humanSectionStatus.innerText = "Village";
  } else if (population >= 1000) {
    humanSectionStatus.innerText = "Town";
  } else if (population >= 10000) {
    humanSectionStatus.innerText = "City";
  } else if (population >= 100000) {
    humanSectionStatus.innerText = "Country";
  } else {
    humanSectionStatus.innerText = "Wasteland";
  }
}

// =============================================================== //
// ============================ FARM ============================= //
// =============================================================== //

farmerButton.addEventListener('click', () => {
  if (food >= farmerCost && human >= 1) {
    food -= farmerCost;
    human -= 1;
    farmer += 1;
    farmerCost *= 1.6;
    foodProd += 0.1;
    updateText();
  }
});

// =============================================================== //
// ============================ ONE TIME UPGRADES ============================= //
// =============================================================== //

let upgradeOne = {
  name: 'Full tummy, happy spirit',
  desc: 'x2 Farmer production',
  cost: 10,
  active: false,
  effect: function effect() {
    foodProd *= 2;
  }
};

let upgradeOneButton = document.querySelector(".upgrade-one-button");
upgradeOneButton.addEventListener('click', () => {
  if (food >= upgradeOne.cost) {
    food -= upgradeOne.cost;
    upgradeOne.active = true;
  }
  if (upgradeOne.active == true) {
    upgradeOne.effect();
  }
})


// =============================================================== //
// ======================== SAVE AND RESET PROGRESS ========================== //
// =============================================================== //

//Save Progress

function saveProgress() {
  // Food
  JSON.stringify(localStorage.setItem("food", food));

  // Human
  JSON.stringify(localStorage.setItem("population", population));
  JSON.stringify(localStorage.setItem("human", human));
  JSON.stringify(localStorage.setItem("humanCost", humanCost));

  // Farmer
  JSON.stringify(localStorage.setItem('farmer', farmer));
  JSON.stringify(localStorage.setItem('farmerCost', farmerCost));
  JSON.stringify(localStorage.setItem("foodProd", foodProd));

  // Change the visibility of the 'Progress saved!' text.
  saveText.style.visibility = "visible";
  setTimeout(() => {saveText.style.visibility = "hidden"}, 3000);

  updateText();
}
saveButton.addEventListener('click', saveProgress);

//Reset Progress

function resetProgress() {
  // Food
  JSON.stringify(localStorage.setItem("food", 0));
  food = 0;
  
  // Human
  JSON.stringify(localStorage.setItem("population", 0));
  population = 0;
  JSON.stringify(localStorage.setItem("human", 0));
  human = 0;
  JSON.stringify(localStorage.setItem("humanCost", 50));
  humanCost = 50;

  // Farm
  JSON.stringify(localStorage.setItem('farmer', 0));
  farmer = 0;
  JSON.stringify(localStorage.setItem('farmerCost', 10));
  farmerCost = 10;
  JSON.stringify(localStorage.setItem("foodProd", 0));
  foodProd = 0;
  
  //Update every single text on the page.
  updateText();
}
resetButton.addEventListener('click', resetProgress);



// =============================================================== //
// ======================== ON PAGE LOAD FUNCTIONS ========================== //
// =============================================================== //

// Update all relevant text if the user reloads the page.
updateText();
//setInterval(() => {JSON.stringify(localStorage.setItem("food", food))}, 100);

// The meaning of life is: waffles.