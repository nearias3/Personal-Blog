// back button sends user back to the the homepage
// blogs are added from each submit into the containers


const themeSwitcher = document.getElementById("modeToggle");
const container = document.body;

let mode = "dark";

themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});