function storeBlogPost(username, title, content) {
    const blogPost = { username, title, content };
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

function getBlogPosts() {
    return JSON.parse(localStorage.getItem('blogPosts'))
}

export { storeBlogPost, getBlogPosts, validateFormInputs}

// how to retrieve all the blog posts from localstorage

// how to link the files from other scripts to functions created here