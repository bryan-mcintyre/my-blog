function renderBlogPost() {
    // parse .JSON string to JS object
    const blogPost = JSON.parse(localStorage.getItem('blogPost'))

    if (blogPost !== null) {
        document.getElementById('saved-username').innerHTML = blogPost.username

    }
}