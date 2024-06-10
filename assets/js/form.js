const themeSwitcher = document.getElementById('modeToggle');
const container = document.body;

let mode = 'dark';

themeSwitcher.addEventListener("click", function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});



// prevent default event
// set up form values
// set up error message for form
// how to store blogs in local storage???
