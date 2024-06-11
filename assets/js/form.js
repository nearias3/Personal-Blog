import { storeBlogPost } from "./logic.js";

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


document.getElementById("blogForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const errorMessage = document.getElementById("errorMessage");
    
    
    username: username.value;
    title: title.value;
    content: content.value;

    const blogPost = {
      username,
      title,
      content,
    };

    storeBlogPost(username, title, content);

    window.location.href='blog.html';
  });


//  TODO: Blog posts are still not showing in the blog html
// TODO: hitting the submit button doesn't take me to the blog html posts page
