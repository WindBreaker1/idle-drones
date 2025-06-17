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
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "What’s the difference between ignorance and apathy? I don’t know and I don’t care.",
  "Refusing to go to the gym is a form of resistance training.",
  "Communist jokes aren’t funny unless everyone gets them.",
  "I buy all my guns from a guy called T-Rex. He’s a small arms dealer.",
  "Four fonts walk into a bar. The bartender says, ‘Hey! We don’t want your type in here!’",
  "I saw a sign the other day that said, ‘Watch for children,’ and I thought, ‘That sounds like a fair trade.’",
  () => `You have ${Math.trunc(value.food * 10)/10} food. Keep gathering!`,
  () => `Your click power is: ${value.clickPower}. Your mouse must be on steroids!`,
  () => `You have ${Math.trunc(value.human * 10)/10} humans. It must be hard taking care of so many people.`,
  () => `You have ${Math.trunc(value.wood * 10)/10} wood. You must kill more trees.`,
  () => `You have ${Math.trunc(value.stone * 10)/10} stone. Consider child labor?`,
  () => `You have ${Math.trunc(value.scrap * 10)/10} scrap. (＠_＠;)`,
  () => `You have ${Math.trunc(value.drone * 10)/10} drones. Accelerationism inbound.`,
  "Did you do your daily act of kindness today?",
  "I'll add more of these someday...",
];

function showNews() {
  let x = Math.floor(Math.random() * news.length);
  let message = typeof news[x] === 'function' ? news[x]() : news[x];
  newsSection.innerHTML = message;
  newsAnimation();
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
