// Import images 
// SPECIALS
import rawChicken from "./assets/raw-chicken.png";
import chickenParmesan from "./assets/chicken-nugget-parmesan.png";
import idiotSandwich from "./assets/idiot-sandwich.png";
import ghandisFlipFlop from "./assets/ghandis-flip-flop.png";
// NUGGETS
import classicNuggets from "./assets/classic-nuggets.png";
import spicyNuggets from "./assets/spicy-nuggets.png";
import grilledNuggets from "./assets/grilled-nuggets.png";
import veganNuggets from "./assets/vegan-nuggets.png";
import honeyButterNuggets from "./assets/honey-butter-nuggets.png";
import stuffedCheeseNuggets from "./assets/stuffed-cheese-nuggets.png";
import mapleGlazedNuggets from "./assets/maple-glazed-nuggets.png";
// SANDWICHES
import chickenSandwich from "./assets/chicken-sandwich.png";
import spicySandwich from "./assets/spicy-chicken-sandwich.png";
import grilledSandwich from "./assets/grilled-chicken-sandwich.png";
import veganSandwich from "./assets/vegan-chicken-sandwich.png";
import honeyBBQSandwich from "./assets/honey-bbq-chicken-sandwich.png";
import baconBombSandwich from "./assets/bacon-bomb-chicken-sandwich.png";
// SIDES
import frenchFries from "./assets/french-fries.png";
import sweetFries from "./assets/sweet-potato-fries.png";
import baguette from "./assets/baguette.png";
import apples from "./assets/apples.png";
import macCheese from "./assets/mac-and-cheese.png";
import mashedPotatoes from "./assets/mashed-potatoes.png";
import extraordinaryNugget from "./assets/extraordinary-nugget.png";
// SWEETS
import grnDonut from "./assets/grn-donut.png";
import caramelIceCream from "./assets/caramel-ice-cream.png";
import toffeePudding from "./assets/toffee-pudding.png";
import keyLimePie from "./assets/key-lime-pie.png";
// DRINKS
import coke from "./assets/coke.png";
import lemonade from "./assets/lemonade.png";
import drPepper from "./assets/dr-pepper.png";
import sprite from "./assets/sprite.png";
// SAUCES
import lambSauce from "./assets/lamb-sauce.png";
import gordonSauce from "./assets/gordon-sauce.png";
import honeyMustard from "./assets/honey-mustard.png";
import chimichurri from "./assets/chimichurri.png";
import bbqSauce from "./assets/bbq-sauce.png";
import ranch from "./assets/ranch.png";
import ketchup from "./assets/ketchup.png";
import teriyakiSauce from "./assets/teriyaki-sauce.png";

// Display the menu page
export function Menu() {
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
        title.textContent = "Menu";

        headingContent.appendChild(title);
        headingWrapper.appendChild(headingBorder);
        headingWrapper.appendChild(headingContent);
        
        return headingWrapper;
    };

    const displayMenu = () => {
        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        
        // define the hierarchical structure of objects for the menu
        // use plain objects since we are only representing data, not behavior
        const menuData = [
            {
                sectionTitle: "Specials",
                foodItemData: [
                    {
                        name: "Raw Chicken",
                        image: rawChicken,
                        price: "$5.65",
                        description: "Raw chicken that contains no harmful pathogens and rests on top of fresh thyme. Seasoned with chimichurri."
                    },
                    {
                        name: "Chicken Parmesan",
                        image: chickenParmesan,
                        price: "$11.75",
                        description: "Chicken nuggets smothered in cheese and marinara sauce. It'll melt your worries away."
                    },
                    {
                        name: "Idiot Sandwich",
                        image: idiotSandwich,
                        price: "$14.45",
                        description: "Premium sandwich cooked to perfection. Only idiot sandwiches can eat this delicacy."
                    },
                    {
                        name: "Ghandi's Flip Flop",
                        image: ghandisFlipFlop,
                        price: "$8.25",
                        description: "Basically just overcooked chicken in the shape of a flip flop. Also known as \'Overcooked Garbage\'."
                    }
                ]
            },
            {
                sectionTitle: "Nuggets",
                foodItemData: [
                    {
                        name: "Classic Nuggets",
                        image: classicNuggets,
                        price: "$10.30",
                        description: "Classic chicken nuggets. Simple yet delicious."
                    },
                    {
                        name: "Spicy Nuggets",
                        image: spicyNuggets,
                        price: "$10.30",
                        description: "Chicken nuggets with chili powder and cayenne peppers. Eat them if you dare."
                    },
                    {
                        name: "Grilled Nuggets",
                        image: grilledNuggets,
                        price: "$11.30",
                        description: "Chicken nuggets with a smoky and tender texture. Very succulent."
                    },
                    {
                        name: "Vegan Nuggets",
                        image: veganNuggets,
                        price: "$9.80",
                        description: "Plant-based nuggets with chicken-like texture. Perfect for vegans."
                    },
                    {
                        name: "Honey Butter Nuggets",
                        image: honeyButterNuggets,
                        price: "$12.80",
                        description: "Chicken nuggets glazed with honey and butter. Trust me, it tastes better than orange chicken from Panda Express."
                    },
                    {
                        name: "Cheesy Nuggets",
                        image: stuffedCheeseNuggets,
                        price: "$12.30",
                        description: "Chicken nuggets stuffed with melted cheese. This one is for people who love cheese."
                    },
                    {
                        name: "Maple Glazed Nuggets",
                        image: mapleGlazedNuggets,
                        price: "$13.10",
                        description: "Chicken nuggets glazed with maple sauce and a pinch of citrus and salt. These are personally my favorite nuggets."
                    }
                ]
            },
            {
                sectionTitle: "Sandwiches",
                foodItemData: [
                    {
                        name: "Chicken Sandwich",
                        image: chickenSandwich,
                        price: "$11.45",
                        description: "Standard chicken sandwich with tomatoes, lettuce, and pickles. If you don't like pickles, you should still eat them."
                    },
                    {
                        name: "Spicy Sandwich",
                        image: spicySandwich,
                        price: "$11.45",
                        description: "Chicken sandwich with cayenne peppers. Yes, the pickles will be filled with chili powder."
                    },
                    {
                        name: "Grilled Sandwich",
                        image: grilledSandwich,
                        price: "$12.15",
                        description: "Chicken sandwich with a smoky and tender texture. If it's overcooked, you'll get a full refund."
                    },
                    {
                        name: "Vegan Sandwich",
                        image: veganSandwich,
                        price: "$10.85",
                        description: "Plant-based sandwich with chicken-like texture. Perfect for vegans that like pickles."
                    },
                    {
                        name: "Honey BBQ Sandwich",
                        image: honeyBBQSandwich,
                        price: "$13.25",
                        description: "Chicken sandwich with a special honey & BBQ sauce. You know you want it."
                    },
                    {
                        name: "Bacon Bomb Sandwich",
                        image: baconBombSandwich,
                        price: "$14.75",
                        description: "Chicken sandwich with added ingredients like bacon, cheese, and onion rings. It's the bomb."
                    }
                ]
            },
            {
                sectionTitle: "Sides",
                foodItemData: [
                    {
                        name: "French Fries",
                        image: frenchFries,
                        price: "$2.85",
                        description: "Just some regular french fries. Too bad they don't come in a combo."
                    },
                    {
                        name: "Sweet Potato Fries",
                        image: sweetFries,
                        price: "$3.15",
                        description: "Sweet potato fries cooked until crispy. A great source of vitamins A and C."
                    },
                    {
                        name: "Baguette",
                        image: baguette,
                        price: "$2.85",
                        description: "Just some french bread that I stole from Panera. No biggie."
                    },
                    {
                        name: "Apples",
                        image: apples,
                        price: "$1.35",
                        description: "Sliced gala apples served in a cup. An apple a day keeps the donkeys away."
                    },
                    {
                        name: "Mac & Cheese",
                        image: macCheese,
                        price: "$2.35",
                        description: "Classic mac & cheese. No, they are not store-bought, frozen mac & cheese."
                    },
                    {
                        name: "Mashed Potatoes",
                        image: mashedPotatoes,
                        price: "$4.05",
                        description: "Boiled potatoes that were crushed and mixed with butter, cream, and gravy. Take it or leave it."
                    },
                    {
                        name: "Extraordinary Nugget",
                        image: extraordinaryNugget,
                        price: "$4.65",
                        description: "The most delicious chicken nugget in the world. No one will ever know its secret ingredients."
                    }
                ]
            },
            {
                sectionTitle: "Sweets",
                foodItemData: [
                    {
                        name: "GRN Donut",
                        image: grnDonut,
                        price: "$3.50",
                        description: "Just a chocolate donut. I like chocolate!"
                    },
                    {
                        name: "Caramel Ice Cream",
                        image: caramelIceCream,
                        price: "$4.70",
                        description: "Vanilla ice cream with caramel sauce, frosting, and sweetened popcorn. Perfect for movie nights."
                    },
                    {
                        name: "Toffee Pudding",
                        image: toffeePudding,
                        price: "$4.30",
                        description: "Chocolate sponge cake with pudding and vanilla ice cream. Top-notch dessert right here."
                    },
                    {
                        name: "Key Lime Pie",
                        image: keyLimePie,
                        price: "$5.15",
                        description: "Tart, creamy filling made from small, aromatic key lime juice. I'm sorry, I had to include it here."
                    }
                ]
            },
            {
                sectionTitle: "Drinks",
                foodItemData: [
                    {
                        name: "Coke",
                        image: coke,
                        price: "$2.45",
                        description: "Just regular Coca-Cola. Don't get me started on Pepsi, that debate is lame."
                    },
                    {
                        name: "Lemonade",
                        image: lemonade,
                        price: "$2.70",
                        description: "Lemonade with lots of sugar. Leads to rapid blood spikes and intense craving."
                    },
                    {
                        name: "Dr. Pepper",
                        image: drPepper,
                        price: "$2.45",
                        description: "Dr. Pepper, my favorite drink. I actually like this better than Coke."
                    },
                    {
                        name: "Sprite",
                        image: sprite,
                        price: "$2.45",
                        description: "Sprite. Who drinks Sprite these days?"
                    },
                    {
                        name: "Coke Zero",
                        image: coke,
                        price: "$2.45",
                        description: "Coke Zero, a healthier substitute for regular Coke. And it tastes way better than Diet Coke."
                    }
                ]
            },
            {
                sectionTitle: "Sauces",
                foodItemData: [
                    {
                        name: "Lamb Sauce",
                        image: lambSauce,
                        price: "$1.20",
                        description: "Where's the lamb sauce? WHERE'S THE LAMB SAAAAUCE!!?"
                    },
                    {
                        name: "Gordon's Sauce",
                        image: gordonSauce,
                        price: "$1.35",
                        description: "My signature sauce. It's a secret."
                    },
                    {
                        name: "Honey Mustard",
                        image: honeyMustard,
                        price: "FREE",
                        description: "Sweet and tangy condiment that's free. It's a win."
                    },
                    {
                        name: "Chimichurri",
                        image: chimichurri,
                        price: "$0.30",
                        description: "Vibrant sauce made from chopped parsley, garlic, olive oil, and pepper flakes. Great for nuggets."
                    },
                    {
                        name: "BBQ sauce",
                        image: bbqSauce,
                        price: "$0.30",
                        description: "Sweet, tangy, and spicy sauce. I don't like BBQ sauce, it upsets my stomach."
                    },
                    {
                        name: "Ranch",
                        image: ranch,
                        price: "$0.30",
                        description: "Savory, creamy dressing. But, I also don't like ranch."
                    },
                    {
                        name: "Ketchup",
                        image: ketchup,
                        price: "FREE",
                        description: "Why did Gordon throw ketchup at one of the contestants? Because he couldn't \'catch-up\' to his standards."
                    },
                    {
                        name: "Teriyaki Sauce",
                        image: teriyakiSauce,
                        price: "$0.30",
                        description: "Glossy and sweet glaze made from soy sauce. 私のジョークは気に入りましたか?"
                    }
                ]
            }
        ];

        menuData.forEach(({ sectionTitle, foodItemData }) => {
            const menuSection = document.createElement("div");
            const menuSectionTitle = document.createElement("div");
            const foodItems = document.createElement("div");

            menuSection.classList.add("menu-section");
            menuSectionTitle.classList.add("menu-section-title");
            foodItems.classList.add("food-items");

            const h1Title = document.createElement("h1");
            h1Title.textContent = sectionTitle;

            menuSectionTitle.appendChild(h1Title);
            menuSection.appendChild(menuSectionTitle);

            foodItemData.forEach(({ name, image, price, description }) => {
                const foodItem = document.createElement("div");
                const foodItemContent = document.createElement("div");
                const foodItemHeader = document.createElement("div");
                const foodItemDesc = document.createElement("div");

                foodItem.classList.add("food-item");
                foodItemContent.classList.add("food-item-content");
                foodItemHeader.classList.add("food-item-header");
                foodItemDesc.classList.add("food-item-description");

                const foodItemImage = createImage(image, name, "food-item-img");

                const h2Title = document.createElement("h2");
                const foodPrice = document.createElement("p");
                const foodDesc = document.createElement("p");
                h2Title.textContent = name;
                foodPrice.textContent = price;
                foodDesc.textContent = description;

                foodItemDesc.appendChild(foodDesc);
                foodItemHeader.appendChild(h2Title);
                foodItemHeader.appendChild(foodPrice);
                foodItemContent.appendChild(foodItemHeader);
                foodItemContent.appendChild(foodItemDesc);

                foodItem.appendChild(foodItemImage);
                foodItem.appendChild(foodItemContent);

                foodItems.appendChild(foodItem);
            });

            menuSection.appendChild(foodItems);
            menuWrapper.appendChild(menuSection);
        });

        return menuWrapper;
    };

    return {
        displayHeading,
        displayMenu
    };
}