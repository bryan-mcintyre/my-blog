// Access toggle switch
const themeSwitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container')

// Set default mode to light
let mode = 'dark'

// Listen for toggle switch
themeSwitcher.addEventListener('click', function() {
    // If mode is dark, applies light mode
    if (mode === 'dark') {
        mode = 'light'
        container.setAttribute('class', 'light')
    }
    // If mode is light, applies dark mode
    else {
        mode = 'dark'
        container.setAttribute('class', 'dark')
    }
})

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

    
// function renderBlogPost() {
//     let lastPost = JSON.parse(localStorage.getItem('blogPost'))
    
//         document.getElementById('saved-username').innerHTML = lastPost.username
//         document.getElementById('saved-title').innerHTML = lastPost.title
//         document.getElementById('saved-content').innerHTML = lastPost.content
// }

submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    saveBlogPost()
    // renderBlogPost()
})

// function init() {
//     renderBlogPost()
// }
// init()


