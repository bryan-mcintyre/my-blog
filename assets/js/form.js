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