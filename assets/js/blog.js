function renderBlogPost() {
    // parse .JSON string to JS object
    let blogPosts = JSON.parse(localStorage.getItem('blogPost'))

    for (let i = 0; i < blogPosts.length; i++) {
        document.getElementById('blog-container').innerHTML +=
            `<div class="card">
    <h2>Username</h2>
    <p class="display">
        <span id="saved-username">${blogPosts[i].username}</span>
    </p>
    <h2>Title</h2>
    <p class="display">
        <span id="saved-title">${blogPosts[i].title}</span>
    </p>
    <h3>Content</h3>
    <p class="display">
        <span id="saved-content">${blogPosts[i].content}</span>
    </p>
</div>`
    }
}

renderBlogPost()

// function init() {
//     renderBlogPost()
// }
// init()