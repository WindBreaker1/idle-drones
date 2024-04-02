//HTML DOM elements.
const lightSwitch = document.querySelector('.light-switch');

// Change from light mode to dark and reverse.
let darkMode = localStorage.getItem('darkMode'); 

// If the user already visited and enabled darkMode start things off with it on.
if (darkMode === 'enabled') {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  lightSwitch.innerText = "🌙";
}

// Click the button and change the light.
lightSwitch.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  // If dark mode is not enabled, then change to dark, else change it to light.
  if (darkMode !== 'enabled') {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    lightSwitch.innerText = "🌙";
  } else {  
  document.body.classList.remove('darkmode'); 
  localStorage.setItem('darkMode', null);
  lightSwitch.innerText = "🌞";
  }
});