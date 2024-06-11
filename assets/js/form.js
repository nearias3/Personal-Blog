import { storeBlogPost } from "./logic.js";

const themeSwitcher = document.getElementById("modeToggle");
const container = document.body;

let mode = "dark";

themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    themeSwitcher.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
    themeSwitcher.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!username || !title || !content) {
      errorMessage.textContent = "Please fill in all fields.";
      return;
    }

    errorMessage.textContent = "";

    storeBlogPost(username, title, content);
    window.location.href = "blog.html";
  });