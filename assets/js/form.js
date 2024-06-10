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

    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    const errorMessage = document.getElementById('errorMessage');

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    username: username.value;
    title: title.value;
    content: content.value;

    const blogPost = {
      username,
      title,
      content,
    };

});

// how to store blogs in local storage???
