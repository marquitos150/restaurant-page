import "./home.css";
import "./menu.css";
import "./contact.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

const content = document.querySelector("#content");

const home = Home();
const menu = Menu();
const contact = Contact();

content.appendChild(contact.displayHeading());
content.appendChild(contact.displayContactForm());

/*
content.appendChild(menu.displayHeading());
content.appendChild(menu.displayMenu());

content.appendChild(home.displayHeading());
content.appendChild(home.displayGordonImages());
content.appendChild(home.displayIntroPanel());
content.appendChild(home.displayMenuPanel());
content.appendChild(home.displayHoursPanel());
content.appendChild(home.displayReviewsPanel());
content.appendChild(home.displayOutroPanel());
*/