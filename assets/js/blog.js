import { getBlogPosts } from "./logic.js";

document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts");
  const blogPosts = getBlogPosts();

  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><em>by ${post.username}</em></p>
        `;
    postsContainer.appendChild(postElement);
  });

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


  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});