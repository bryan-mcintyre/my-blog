

// Form
let username = document.getElementById('username')
let title = document.getElementById('title')
let content = document.getElementById('content')
let submitButton = document.getElementById('submit')

function saveBlogPost () {

    let blogPosts = JSON.parse(localStorage.getItem('blogPost'))

    if (!blogPosts) {
        blogPosts = []
    }

    let blogPost = {
        username: username.value,
        title: title.value,
        content: content.value,
    }

    blogPosts.push(blogPost)
    localStorage.setItem('blogPost', JSON.stringify(blogPosts))
}


submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    saveBlogPost()
    location.href = "blog.html"
    // renderBlogPost()
})


