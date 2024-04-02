// HTML DOM elements
const foodText = document.querySelector(".food-text");
const addFoodButton = document.querySelector(".add-food-button");

// Commonly used variables
let food = localStorage.getItem("food");
let clickPower = 1;

// Update all DOM elements when something changes.
function updateText() {
  foodText.innerText = `${food} food`;
}

// Click to get food.
addFoodButton.addEventListener('click', () => {
  food += clickPower;
  updateText();
});