


document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".nxMenu");
    const navbar = document.querySelector(".nxNavbar");
    const menuIcon = menu.querySelector("i");

    menu.addEventListener("click", function () {

        navbar.classList.toggle("active");

        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");

    });

    document.querySelectorAll(".nxNavbar a").forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-xmark");
        });
    });

});

const typingElement = document.getElementById("typingText");

const words = [
    "Frontend Web Developer",
    "Creative Web Designer",
    "Modern Website Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        charIndex++;

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 5000);
            return;
        }

        setTimeout(typeEffect, 300);

    } else {

        charIndex--;

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        if (charIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            setTimeout(typeEffect, 1800);
            return;
        }

        setTimeout(typeEffect, 200);
    }
}

if (typingElement) {
    typeEffect();
}
