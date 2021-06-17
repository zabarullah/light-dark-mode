const toggleSwitch = document.querySelector('input[type="checkbox"]');
// Below mentioned elements don't change to dark colour theme when toggle switched so we have to get the element and do this manually in JS
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

//Dark or Light images function - based on the darkMode or lighMode functions the image url ending will change to dark or light to reflect the changes required for each mode.
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// // Dark Mode manual styling for other elements that didnt change by its self using the toggle switch  (commented out and shortened in toggleDarkLightMode function to prevent DRY)
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     // image1.src = 'img/undraw_proud_coder_dark.svg';
//     // image2.src = 'img/undraw_feeling_proud_dark.svg';
//     // image3.src = 'img/undraw_conceptual_idea_dark.svg'; // new function imageMode was created to avoid dry code (duplication), so the 6 lines are commented out for this reason
//     imageMode('dark');
// }

//Light Mode function since things where not moving back to normal state once, you switch from dark back to light
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0  / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     // image1.src = 'img/undraw_proud_coder_light.svg';
//     // image2.src = 'img/undraw_feeling_proud_light.svg';
//     // image3.src = 'img/undraw_conceptual_idea_light.svg';
//     imageMode('light');
// }

// The above functions darkMode and lightMode seem to be DRY (DO not Repeat Yourself), so the below function ToggleDarkLightMode(isDark),  will help this using conditional ternary operator
function toggleDarkLightMode(isDark) { // if isDark = true the first settings to be used, if false then second settings
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'; // is dark then use first parameter otherwise use the second parameter, same for below
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
//      darkMode(); commented due to introducing toggleDarklightmode function
        toggleDarkLightMode(true); // if dark mode is true then dark mode settings from toggleDarkLightMode will trigger
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
//      lightMode(); commented due to introducing toggleDarklightmode function
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
//      darkMode(); commented due to introducing toggleDarklightmode function
        toggleDarkLightMode(true);
    }
}