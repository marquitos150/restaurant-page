// Import images
import logo from "./assets/logo.svg";
import profilePic1 from "./assets/girl1.png";
import profilePic2 from "./assets/boy.png";
import profilePic3 from "./assets/girl2.png";
import grillyFull from "./assets/grilly-fullbody.png";

// Display the home page
export function Home() {
    // helper functions
    const createImage = (src, alt, className) => {
        const image = document.createElement("img");
        image.src = src;
        image.alt = alt;
        image.classList.add(className);
        return image;
    };

    // HEADING
    const displayHeading = () => {
        const headingWrapper = document.createElement("div");
        const headingBorder = document.createElement("div");
        const headingContent = document.createElement("div");
        const title = document.createElement("h1");

        headingWrapper.classList.add("heading-wrapper");
        headingBorder.classList.add("heading-border");
        headingContent.classList.add("heading-content");
        title.textContent = "Home";

        headingContent.appendChild(title);
        headingWrapper.appendChild(headingBorder);
        headingWrapper.appendChild(headingContent);
        
        return headingWrapper;
    };

    // GRILLY LOGO
    const displayGrillyLogo = () => {
        const grillyImagesWrapper = document.createElement("div");
        grillyImagesWrapper.classList.add("grilly-images");
        const grillyGiantLogo = createImage(logo, "GRN logo", "giant-logo");
        grillyImagesWrapper.appendChild(grillyGiantLogo);

        return grillyImagesWrapper;
    };

    // INTRODUCTION PANEL
    const displayIntroPanel = () => {
        const introWrapper = document.createElement("div");
        introWrapper.classList.add("introduction");

        const firstParagraph = document.createElement("p");
        firstParagraph.textContent = `
            Welcome to GRN—Grilly Rawford's Nuggets—where we 
            serve some of the finest chicken in the country. Think KFC is better? Well it's not. 
            And if you don't believe me? Well then you're a donut.
        `

        const secondParagraph = document.createElement("p");
        secondParagraph.textContent = `
            On top of this, we have a variety of food options you can choose from that were inspired from popular
            shows and other restaurants. While you're here, you might even meet world-renowned chefs 
            that now work at our kitchen. If you're lucky, you may even catch me stopping by too!
        `

        introWrapper.appendChild(firstParagraph);
        introWrapper.appendChild(secondParagraph);

        return introWrapper;
    };

    // MENU PANEL
    const displayMenuPanel = () => {
        const menuWrapper = document.createElement("div");
        const chickenBackground = document.createElement("div");
        const menuContent = document.createElement("div");
        const menuHeader = document.createElement("div");

        menuWrapper.classList.add("menu-container");
        chickenBackground.classList.add("chicken-nugget-image");
        menuContent.classList.add("menu-main");
        menuHeader.classList.add("header");

        const headerText = "Feast Your Eyes";
        const headerFront = document.createElement("h1");
        headerFront.classList.add("front");
        headerFront.textContent = headerText;
        const headerBack = document.createElement("h1");
        headerBack.classList.add("back");
        headerBack.textContent = headerText;

        const text = document.createElement("p");
        const boldText = document.createElement("b");
        text.textContent = "As I mentioned earlier, we have a variety of food options. ";
        boldText.textContent = "Take a look at them in our online menu!";

        const button = document.createElement("button");
        button.classList.add("menuBtn");
        button.textContent = "Explore Menu";

        menuWrapper.appendChild(chickenBackground);
        menuHeader.appendChild(headerFront);
        menuHeader.appendChild(headerBack);
        menuContent.appendChild(menuHeader);
        text.appendChild(boldText);
        menuContent.appendChild(text);
        menuContent.appendChild(button);
        menuWrapper.appendChild(menuContent);

        return menuWrapper;
    };

    // HOURS PANEL
    const displayHoursPanel = () => {
        const hoursWrapper = document.createElement("div");
        const hoursContent = document.createElement("div");
        const restaurantBackground = document.createElement("div");

        hoursWrapper.classList.add("hours");
        hoursContent.classList.add("hours-main");
        restaurantBackground.classList.add("restaurant");

        // create the tabular schedule
        const title = document.createElement("h1");
        title.textContent = "Hours";
        const schedule = document.createElement("table");

        // first row for table headers
        const firstRow = document.createElement("tr");
        const daysHeader = document.createElement("th");
        const hoursHeader = document.createElement("th");
        daysHeader.textContent = "Day";
        hoursHeader.textContent = "Available Hours";
        firstRow.appendChild(daysHeader);
        firstRow.appendChild(hoursHeader);
        schedule.appendChild(firstRow);

        // subsequent rows
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const availableHours = [
            "8am - 6pm", "6am - 10pm", "6am - 10pm", "6am - 10pm", 
            "6am - 10pm", "6am - 6pm", "8am - 6pm"
        ];
        for (let i = 0; i < days.length; i++) {
            const row = document.createElement("tr");
            const daysData = document.createElement("td");
            const hoursData = document.createElement("td");
            daysData.textContent = days[i];
            hoursData.textContent = availableHours[i];
            row.appendChild(daysData);
            row.appendChild(hoursData);
            schedule.appendChild(row);
        }

        // finish appending everything else
        hoursContent.appendChild(title);
        hoursContent.appendChild(schedule);
        hoursWrapper.appendChild(hoursContent);
        hoursWrapper.appendChild(restaurantBackground);

        return hoursWrapper;
    };
    
    const displayReviewsPanel = () => {
        const reviewsWrapper = document.createElement("div");
        const reviews = document.createElement("div");

        reviewsWrapper.classList.add("review-container");
        reviews.classList.add("review-wrapper");

        const title = document.createElement("h1");
        title.textContent = "Reviews";
        reviewsWrapper.appendChild(title);

        const image1 = createImage(profilePic1, "Woman wearing teal sweater", "profile-pic");
        const image2 = createImage(profilePic2, "Man wearing jacket", "profile-pic");
        const image3 = createImage(profilePic3, "Woman wearing white shirt", "profile-pic");
        const images = [image1, image2, image3];
        const names = ["Andressa", "James", "Maria"];
        const content = [
            `\"The grilled sandwich was SOOOO good! Thankfully it wasn't raw.\"`,

            `\"The staff were friendly and the food was served quickly. 
            I've never seen a fast-food restaurant with service this fast!\"`,

            `\"I brought my son here just for a quick lunch, and luckily Grilly Rawford was there.
            My son was so happy to see him!
            Grilly and the staff were very caring and ensured we had a great time there.\"`
        ];
        
        // create the 3 card panels for the reviews
        for (let i = 0; i < images.length; i++) {
            const review = document.createElement("div");
            const name = document.createElement("div");
            const reviewContent = document.createElement("div");

            review.classList.add("review");
            name.classList.add("profile-name");
            reviewContent.classList.add("review-content");

            name.textContent = names[i];

            const text = document.createElement("p");
            const italicText = document.createElement("i");
            italicText.textContent = content[i];

            text.appendChild(italicText);
            reviewContent.appendChild(text);
            review.appendChild(images[i]);
            review.appendChild(name);
            review.appendChild(reviewContent);

            reviews.appendChild(review);
        }

        reviewsWrapper.appendChild(reviews);
        return reviewsWrapper;
    };

    const displayOutroPanel = () => {
        const outroWrapper = document.createElement("div");
        const speechBubble = document.createElement("div");

        outroWrapper.classList.add("outro-container");
        speechBubble.classList.add("dialogue");
        
        const text = document.createElement("p");
        text.append("WHAT ARE YOU WAITING FOR!? Come by GRN @ ");

        const boldText = document.createElement("b");
        boldText.textContent = "700 Boylston St Boston, MA 02116. ";
        text.appendChild(boldText);
        text.append("If you have any questions or comments, feel free to contact me ");

        const button = document.createElement("button");
        button.classList.add("contactBtn");
        button.textContent = "here";
        text.appendChild(button);
        text.append("!");

        speechBubble.appendChild(text);
        outroWrapper.appendChild(speechBubble);

        const grillyRawford = createImage(grillyFull, "Grilly Rawford", "grilly-fullbody");
        outroWrapper.appendChild(grillyRawford);

        return outroWrapper;
    };

    return { 
        displayHeading, 
        displayGrillyLogo, 
        displayIntroPanel, 
        displayMenuPanel, 
        displayHoursPanel,
        displayReviewsPanel,
        displayOutroPanel
    };
}