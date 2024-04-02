// HTML DOM elements
const foodText = document.querySelector(".food-text");
const addFoodButton = document.querySelector(".add-food-button");
const foodProductionButton = document.querySelector(".food-production-button");
const saveText = document.querySelector(".save-text");
const saveButton = document.querySelector(".save-button");
const resetButton = document.querySelector(".reset-button");

// Commonly used variables
let food = JSON.parse(localStorage.getItem("food"));
let foodProd = JSON.parse(localStorage.getItem("foodProd"));
let clickPower = 1;

// Update all DOM elements when something changes.
function updateText() {
  // If food is equal to null, foodText displays '0 food', else foodText displays the update version
  food == null ? foodText.innerText = `0 food` : foodText.innerText = `${Math.trunc(food * 10) / 10} food (${Math.trunc(foodProd * 10)/10} food/second)`;
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

// Upgrade food production.

let cost = 10;
foodProductionButton.addEventListener('click', () => {
  if (food >= cost) {
    food -= cost;
    cost *= 1.6;
    foodProd += 0.1;
    updateText();
    foodProductionButton.innerText = `Upgrade Food Production | Cost: ${Math.trunc(cost * 10) / 10} food`;
  }
});

//Save Progress

function saveProgress() {
  // Saved values go here
  JSON.stringify(localStorage.setItem("food", food));
  JSON.stringify(localStorage.setItem("foodProd", foodProd));
  
  // Change the visibility of the 'Progress saved!' text.
  saveText.style.visibility = "visible";
  setTimeout(() => {saveText.style.visibility = "hidden"}, 3000);
}
saveButton.addEventListener('click', saveProgress);

//Reset Progress

function resetProgress() {
  JSON.stringify(localStorage.setItem("food", 0));
  food = 0;

  JSON.stringify(localStorage.setItem("foodProd", 0));
  foodProd = 0;

  updateText();
}
resetButton.addEventListener('click', resetProgress);

// Update all relevant text if the user reloads the page.
updateText();




// The meaning of life is: waffles.