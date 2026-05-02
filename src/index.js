import "./home.css";
import "./menu.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";

const content = document.querySelector("#content");

const home = Home();
const menu = Menu();

content.appendChild(menu.displayHeading());
content.appendChild(menu.displayMenu());
/*
content.appendChild(home.displayHeading());
content.appendChild(home.displayGordonImages());
content.appendChild(home.displayIntroPanel());
content.appendChild(home.displayMenuPanel());
content.appendChild(home.displayHoursPanel());
content.appendChild(home.displayReviewsPanel());
content.appendChild(home.displayOutroPanel());
*/