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
  "My father has schizophrenia, but he's good people.",
  "My therapist says I have a preoccupation for revenge. We'll see about that.",
  "Have you heard about the new restaurant called ‘Karma?’ There’s no menu—you get what you deserve.",
  "Where is everyone?",
  "I'm reading a book about anti-gravity. It's impossible to put down",
  "What’s the difference between ignorance and apathy? I don’t know and I don’t care.",
  "Refusing to go to the gym is a form of resistance training.",
  "Communist jokes aren’t funny unless everyone gets them.",
  "I buy all my guns from a guy called T-Rex. He’s a small arms dealer.",
  "Four fonts walk into a bar. The bartender says, ‘Hey! We don’t want your type in here!’",
  "I saw a sign the other day that said, ‘Watch for children,’ and I thought, ‘That sounds like a fair trade.’",
  `You have ${Math.trunc(value.food * 10)/10} food. Keep gathering!`,
  `Your click power is: ${value.clickPower}. Your mouse must be on steroids!`,
  `You have ${Math.trunc(value.human * 10)/10} humans. It must be hard taking care of so many people.`,
  `You have ${Math.trunc(value.wood * 10)/10} wood. You <b>must</b> kill more trees.`,
  `You have ${Math.trunc(value.stone * 10)/10} stone. Consider child labor?`,
  `You have ${Math.trunc(value.scrap * 10)/10} scrap. (＠_＠;)`,
  `You have ${Math.trunc(value.drone * 10)/10} drones. Accelerationism inbound.`,
  "Did you do your daily act of kindness today?",
  "I'll add more of these someday...",
];

function showNews() {
  let x = Math.floor(Math.random() * 23);
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
    case 4:
      newsSection.innerText = news[4];
      newsAnimation();
      break;
    case 5:
      newsSection.innerText = news[5];
      newsAnimation();
      break;
    case 6:
      newsSection.innerText = news[6];
      newsAnimation();
      break;
    case 7:
      newsSection.innerText = news[7];
      newsAnimation();
      break;
    case 8:
      newsSection.innerText = news[8];
      newsAnimation();
      break;
    case 9:
      newsSection.innerText = news[9];
      newsAnimation();
      break;
    case 10:
      newsSection.innerText = news[10];
      newsAnimation();
      break;
    case 11:
      newsSection.innerText = news[11];
      newsAnimation();
      break;
    case 12:
      newsSection.innerText = news[12];
      newsAnimation();
      break;      
    case 13:
      newsSection.innerText = news[13];
      newsAnimation();
      break;
    case 14:
      newsSection.innerText = news[14];
      newsAnimation();
      break;
    case 15:
      newsSection.innerText = news[15];
      newsAnimation();
      break;
    case 16:
      newsSection.innerText = news[16];
      newsAnimation();
      break;
    case 17:
      newsSection.innerText = news[17];
      newsAnimation();
      break;
    case 18:
      newsSection.innerText = news[18];
      newsAnimation();
      break;
    case 19:
      newsSection.innerText = news[19];
      newsAnimation();
      break;
    case 20:
      newsSection.innerText = news[20];
      newsAnimation();
      break;
    case 21:
      newsSection.innerText = news[21];
      newsAnimation();
      break;
    case 22:
      newsSection.innerText = news[22];
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
