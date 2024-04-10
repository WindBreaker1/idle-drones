// Imports

// HTML DOM elements.
const newsSection = document.querySelector(".news-section");

// News is an array of different blurbs that I'll show
// depending on the point the player is in the game.
// Some one-liners are taken from https://parade.com/1040121/marynliles/one-liners/.
const news = [
  "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.",
  "I can't believe I got fired from the calendar factory. All I did was take a day off.",
  "Never trust atoms; they make up everything.",
  `You have ${Math.trunc(value.food * 10)/10} food. Keep gathering!`,
];

function showNews() {
  let x = Math.floor(Math.random() * 5);
  switch (x) {
    case 0:
      newsSection.innerText = news[0];
      newsAnimation();
      break;
    case 1:
      newsSection.innerText = news[1];
      newsAnimation();
      break;
    case 2:
      newsSection.innerText = news[2];
      newsAnimation();
      break;
    case 3:
      newsSection.innerText = news[3];
      newsAnimation();
      break;
  }
}

//Function that handles the animation for the news section.
function newsAnimation() {
  newsSection.classList.remove('animated');
  //The browser sees that the styles are going to wind up exactly as they were before, 
  //so the removal and re-addition of the attribute are batched together in one update 
  //and thus you see no change.the styles are going to wind up exactly as they were before,
  //so the removal and re-addition of the attribute are batched together in one update and thus 
  //you see no change.
  //A more in-depth explanation for why I use this property: https://stackoverflow.com/a/39451131.
  void newsSection.offsetWidth;
  newsSection.classList.add('animated');
}

// Show the news every 1 minute.
const newsInterval = setInterval(showNews, 10000);
