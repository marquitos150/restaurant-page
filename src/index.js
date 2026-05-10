"use strict";

import "./home.css";
import "./menu.css";
import "./contact.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const content = document.querySelector("#content");

function onSubmitForm() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
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
}

function displayMenuPage() {
    content.innerHTML = "";
    content.appendChild(Menu().displayHeading());
    content.appendChild(Menu().displayMenu());
    scrollToTop();
}

function displayContactPage() {
    content.innerHTML = "";
    content.appendChild(Contact().displayHeading());
    content.appendChild(Contact().displayContactForm());
    onSubmitForm();
    scrollToTop();
}

// Initlally display the home page (after refreshing page)
displayHomePage();
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

// Listen for any button clicks
document.addEventListener('click', (e) => {
    const button = e.target.closest("button");
    const dropDownMenu = document.querySelector(".drop-down-menu-toggle");

    if (button && button.classList.value === "toggleBtn") {
        dropDownMenu.classList.toggle("open");
    } else if (button && button.classList.value === "homeBtn") {
        displayHomePage();
        dropDownMenu.classList.remove("open");
    } else if (button && button.classList.value === "menuBtn") {
        displayMenuPage();
        dropDownMenu.classList.remove("open");
    } else if (button && button.classList.value === "contactBtn") {
        displayContactPage();
        dropDownMenu.classList.remove("open");
    } else if (!e.target.closest(".drop-down-menu-toggle")) {
        dropDownMenu.classList.remove("open");
    }
});