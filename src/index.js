import "./home.css";
import "./menu.css";
import "./contact.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const content = document.querySelector("#content");

function addButtonListener() {
    const buttons = [...document.querySelectorAll("button")];
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.target.blur();
            if (e.target.classList.value === "homeBtn") {
                displayHomePage();
            }
            if (e.target.classList.value === "menuBtn") {
                displayMenuPage();
            }
            if (e.target.classList.value === "contactBtn") {
                displayContactPage();
            }
        });
    });
}

function onSubmitForm() {
    const form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.blur();
        window.open("https://www.youtube.com/watch?v=vR7KLmVThLk", "_blank");
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function displayHomePage() {
    content.innerHTML = "";
    content.appendChild(Home().displayHeading());
    content.appendChild(Home().displayGordonImages());
    content.appendChild(Home().displayIntroPanel());
    content.appendChild(Home().displayMenuPanel());
    content.appendChild(Home().displayHoursPanel());
    content.appendChild(Home().displayReviewsPanel());
    content.appendChild(Home().displayOutroPanel());
    scrollToTop();
    addButtonListener();
}

function displayMenuPage() {
    content.innerHTML = "";
    content.appendChild(Menu().displayHeading());
    content.appendChild(Menu().displayMenu());
    scrollToTop();
    addButtonListener();
}

function displayContactPage() {
    content.innerHTML = "";
    content.appendChild(Contact().displayHeading());
    content.appendChild(Contact().displayContactForm());
    onSubmitForm();
    scrollToTop();
    addButtonListener();
}

// Initlally display the home page
displayHomePage();
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};