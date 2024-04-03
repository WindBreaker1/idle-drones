// HTML DOM elements
const foodText = document.querySelector(".food-text");
const addFoodButton = document.querySelector(".add-food-button");
const foodProductionButton = document.querySelector(".food-production-button");
const foodProductionTooltip = document.querySelector("#food-production-tooltip");
const humanText = document.querySelector(".human-text")
const saveText = document.querySelector(".save-text");
const saveButton = document.querySelector(".save-button");
const resetButton = document.querySelector(".reset-button");

// Commonly used variables
let food = JSON.parse(localStorage.getItem("food"));
let foodProd = JSON.parse(localStorage.getItem("foodProd"));
let human = JSON.parse(localStorage.getItem("human"));
let clickPower = 1;

// Update all DOM elements when something changes.
function updateText() {
  // If food is equal to null, foodText displays '0 food', else foodText displays the update version
  food == null ? foodText.innerText = `0 food` : foodText.innerText = `${Math.trunc(food * 10) / 10} food (${Math.trunc(foodProd * 10)/10} food/second)`;
  human == null ? humanText.innerText = `0 human/s` : humanText.innerText = `${human} human/s`;
  foodProductionButton.innerText = `Upgrade Food Production | Cost: ${Math.trunc(plantationCost * 10) / 10} food`;
  foodProductionTooltip.innerText = `Plant food to get 0.1 food per second. Cost: ${Math.trunc(plantationCost * 10) / 10} food`;
}

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

// If food > 30, reveal agriculture section.

foodProductionButton.classList.add('hidden');

let isButtonVisible = localStorage.getItem('isButtonVisible') === "true";
//console.log(isButtonVisible);

function toggleButtonVisibility(foodValue, booleanValue) {
  if (foodValue >= 10 && booleanValue == true) {
    foodProductionButton.classList.remove('hidden');
    foodProductionButton.classList.add('visible');
  } else if (booleanValue == false) {
    foodProductionButton.classList.remove('hidden');
    foodProductionButton.classList.add('visible');
  }
}
toggleButtonVisibility(food, isButtonVisible);
const toggleButtonInterval = setInterval(() => {toggleButtonVisibility(food, isButtonVisible)}, 1000);



// =============================================================== //
// ======================== AGRICULTURE ========================== //
// =============================================================== //

// Upgrade food production.

// Actual plantation upgrade.
let plantationCost = JSON.parse(localStorage.getItem('plantationCost'));
if (plantationCost === null) {
  plantationCost = 10;
  JSON.stringify(localStorage.setItem('plantationCost', plantationCost));
}
foodProductionButton.addEventListener('click', () => {
  if (food >= plantationCost) {
    food -= plantationCost;
    plantationCost *= 1.6;
    foodProd += 0.1;
    updateText();
  }
});

// If food > 500, meet a human.


function meetHuman() {
  if (food >= 30 && human === 0) {
    human += 1;
    localStorage.setItem("human", JSON.stringify(human));
    updateText();
  }
}
meetHuman();


//Save Progress

function saveProgress() {
  // Saved values go here
  JSON.stringify(localStorage.setItem("food", food));
  JSON.stringify(localStorage.setItem("foodProd", foodProd));
  JSON.stringify(localStorage.setItem("human", human));
  JSON.stringify(localStorage.setItem('plantationCost', plantationCost));
  
  // Upgrade sections go here.
  localStorage.setItem("isButtonVisible", false);

  // Change the visibility of the 'Progress saved!' text.
  saveText.style.visibility = "visible";
  setTimeout(() => {saveText.style.visibility = "hidden"}, 3000);
}
saveButton.addEventListener('click', saveProgress);

//Reset Progress

function resetProgress() {
  //Reset values.
  JSON.stringify(localStorage.setItem("food", 0));
  food = 0;
  
  JSON.stringify(localStorage.setItem("foodProd", 0));
  foodProd = 0;

  JSON.stringify(localStorage.setItem("human", 0));
  human = 0;

  JSON.stringify(localStorage.setItem('plantationCost', null));

  //Hide plantation button when reset.
  localStorage.setItem("isButtonVisible", true);
  foodProductionButton.classList.remove('visible');
  foodProductionButton.classList.add('hidden');
  clearInterval(toggleButtonInterval);
  
  //Update every single text on the page.
  updateText();
}
resetButton.addEventListener('click', resetProgress);





// Update all relevant text if the user reloads the page.
updateText();
//setInterval(() => {JSON.stringify(localStorage.setItem("food", food))}, 100);

// The meaning of life is: waffles.