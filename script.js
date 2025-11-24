// Select the elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const navOverlay = document.getElementById('nav-overlay');


// Function to toggle the menu
function toggleMenu() {
    // Check if the menu is currently open (width is 100%)
    if (navOverlay.style.width === "100%") {
        navOverlay.style.width = "0%";
    } else {
        navOverlay.style.width = "100%";
    }
}

// Add click event to the hamburger icon
hamburgerBtn.addEventListener('click', toggleMenu); 

// === TYPEWRITER EFFECT ===
const typedTextSpan = document.querySelector(".auto-type");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["a Coder", "an Engineer", "an AI/ML Enthusiast","an Explorer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});