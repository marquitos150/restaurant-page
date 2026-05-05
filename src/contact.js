// Import image
import cursedGordonRamsay from "./assets/cursed-gordon-ramsay.png";

export function Contact() {
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
        title.textContent = "Contact";

        headingContent.appendChild(title);
        headingWrapper.appendChild(headingBorder);
        headingWrapper.appendChild(headingContent);
        
        return headingWrapper;
    };

    const displayContactForm = () => {
        const contactWrapper = document.createElement("div");
        const contactForm = document.createElement("div");
        contactWrapper.classList.add("contact-wrapper");
        contactForm.classList.add("contact-form");

        const contactFormHeader = document.createElement("h1");
        const contactFormDesc = document.createElement("p");
        const contactFormDescItac = document.createElement("em");
        const contactFormDescWarn = document.createElement("span");

        contactFormHeader.textContent = "Contact Me Here";

        const description = `
            I will respond when I can. If I'm unavailble, a manager or member of our customer service team will assist you. 
            Please refrain from submitting spam, promotional content, or messages unrelated to restaurant inquiries.
        `;
        const warning = "NEVER send threats. Doing so will result in legal action and me publicly humiliating you.";

        contactFormDescWarn.textContent = warning;
        contactFormDescItac.append(description);
        contactFormDescItac.appendChild(contactFormDescWarn);
        contactFormDesc.appendChild(contactFormDescItac);

        const form = document.createElement("form");
        form.setAttribute("autocomplete", "off");
        
        const formData = [
            {
                labelText: "First Name:",
                attributeName: "first-name",
                type: "text",
                placeHolder: "Nino",
                required: false
            },
            {
                labelText: "Last Name:",
                attributeName: "last-name",
                type: "text",
                placeHolder: "Saffron",
                required: false
            },
            {
                labelText: "Email:",
                attributeName: "user-email",
                type: "email",
                placeHolder: "joenagy@gmail.com",
                required: true
            },
            {
                labelText: "Phone Number:",
                attributeName: "phone-number",
                type: "tel",
                placeHolder: "123-456-7890",
                required: false,
                pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                maxLength: "12"
            },
            {
                labelText: "Your Message:",
                attributeName: "message",
                numRows: "5",
                required: true
            }
        ];

        formData.forEach((data) => {
            const label = document.createElement("label");
            label.setAttribute("for", data.attributeName);
            label.textContent = data.labelText;
            form.appendChild(label);

            if (Object.hasOwn(data, "numRows")) {
                // create message box
                const textArea = document.createElement("textarea");
                textArea.setAttribute("id", data.attributeName);
                textArea.setAttribute("name", data.attributeName);
                textArea.setAttribute("rows", data.numRows);
                textArea.setAttribute("required", "");
                form.appendChild(textArea);
            }
            else {
                const input = document.createElement("input");
                input.setAttribute("type", data.type);
                input.setAttribute("id", data.attributeName);
                input.setAttribute("name", data.attributeName);
                input.setAttribute("placeholder", data.placeHolder);

                if (data.required) {
                    input.setAttribute("required", "");
                }
                if (Object.hasOwn(data, "pattern")) {
                    input.setAttribute("pattern", data.pattern);
                    input.setAttribute("maxlength", data.maxLength);

                    // event listener for automatically adding and removing dashes in phone number field
                    input.addEventListener("input", (e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length > 10) value = value.slice(0, 10);

                        if (value.length > 6) {
                            e.target.value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
                        } else if (value.length > 3) {
                            e.target.value = `${value.slice(0, 3)}-${value.slice(3)}`;
                        } else {
                            e.target.value = value;
                        }
                    });
                }
                form.appendChild(input);
            }
        });

        // create button
        const submitBtn = document.createElement("button");
        submitBtn.setAttribute("type", "submit");
        submitBtn.textContent = "Submit";
        form.appendChild(submitBtn);

        contactForm.appendChild(contactFormHeader);
        contactForm.appendChild(contactFormDesc);
        contactForm.appendChild(form);

        // create image of gordon ramsay sticking his tongue out like a weirdo
        const cursedImg = createImage(cursedGordonRamsay, "Gordon Ramsay sticking his tongue out", "cursed-gordon-ramsay");

        contactWrapper.appendChild(contactForm);
        contactWrapper.appendChild(cursedImg);

        return contactWrapper;
    };

    return {
        displayHeading,
        displayContactForm
    };
}