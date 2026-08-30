const textElement = document.getElementById("typing-text");
const phrases = ["Storms. ", "Cyclones. ", "Hurricanes. "];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Remove a character
        textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
    } else {
        // Add a character
        textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
    }

    // Dynamic speeds for typing vs deleting
    let typingSpeed = isDeleting ? 50 : 150;

    // Check if the full phrase is typed
    if (!isDeleting && characterIndex === currentPhrase.length) {
        typingSpeed = 2000; // Pause at the end of the phrase
        isDeleting = true;
    } 
    // Check if the phrase is completely deleted
    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
        typingSpeed = 500; // Pause before typing the next phrase
    }

    setTimeout(type, typingSpeed);
}

// Start the animation loop when the DOM loads
document.addEventListener("DOMContentLoaded", type);