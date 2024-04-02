// HTML DOM elements
const foodText = document.querySelector(".food-text");
const addFoodButton = document.querySelector(".add-food-button");
const saveText = document.querySelector(".save-text");
const saveButton = document.querySelector(".save-button");
const resetButton = document.querySelector(".reset-button");

// Commonly used variables
let food = JSON.parse(localStorage.getItem("food"));
let clickPower = 1;

// Update all DOM elements when something changes.
function updateText() {
  // If food is equal to null, foodText displays '0 food', else foodText displays the update version
  food == null ? foodText.innerText = `0 food` : foodText.innerText = `${food} food`;
}

// Click to get food.
addFoodButton.addEventListener('click', () => {
  food += clickPower;
  updateText();
});

//Save Progress

function saveProgress() {
  // Saved values go here
  JSON.stringify(localStorage.setItem("food", food));
  
  // Change the visibility of the 'Progress saved!' text.
  saveText.style.visibility = "visible";
  setTimeout(() => {saveText.style.visibility = "hidden"}, 3000);
}
saveButton.addEventListener('click', saveProgress);

//Reset Progress

function resetProgress() {
  JSON.stringify(localStorage.setItem("food", 0));
  food = 0;
  updateText();
}
resetButton.addEventListener('click', resetProgress);

// Update all relevant text if the user reloads the page.
updateText();