import "./home.css";
import { Home } from "./home.js";

const content = document.querySelector("#content");
const home = Home();

content.appendChild(home.displayHeading());
content.appendChild(home.displayGordonImages());
content.appendChild(home.displayIntroPanel());
content.appendChild(home.displayMenuPanel());
content.appendChild(home.displayHoursPanel());
content.appendChild(home.displayReviewsPanel());
content.appendChild(home.displayOutroPanel());