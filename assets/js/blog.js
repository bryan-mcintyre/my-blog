function renderBlogPost() {
    // parse .JSON string to JS object
    let newBlogPost = JSON.parse(localStorage.getItem('blogPost'))

    document.getElementById('saved-username').innerHTML = newBlogPost.username
    document.getElementById('saved-title').innerHTML = newBlogPost.title
    document.getElementById('saved-content').innerHTML = newBlogPost.content

    
}

renderBlogPost()