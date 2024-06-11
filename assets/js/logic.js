function storeBlogPost(username, title, content) {
  const blogPost = { username, title, content };
  let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  blogPosts.push(blogPost);
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

function getBlogPosts() {
  return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

export { storeBlogPost, getBlogPosts };