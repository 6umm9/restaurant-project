import { greeting } from "./greeting.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

console.log(greeting);
console.log("Webpack is working!");

// Initial load
loadHome();

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('about-btn').addEventListener('click', () => {
    clearContent();
    loadAbout();
});
