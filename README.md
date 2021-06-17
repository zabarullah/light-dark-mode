# light-dark-mode
dark/light mode toggle feature. Click the link to see it.

the refactored JS script would look like this:

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// function to check condition isDark? if true the first style settings to be used, if false then second settings
function toggleDarkLightMode(isDark) {  
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'; 
    textBox.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0  / 50%)';
    toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'lightMode';
    isDark? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true); // if dark mode is true then dark mode settings from toggleDarkLightMode will trigger
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false); // if dark mode is false then light mode settings(based on the condition ternary second settings) from toggleDarkLightMode will trigger
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) { // if their is a current theme (true)
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}
