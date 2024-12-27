// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n - 1; // Adjust index for next/prev
    showSlides();
}

// Fun Fact functionality
const funFacts = [
    "Did you know? Coding can improve your problem-solving skills!",
    "Cooking is an art that can be learned and perfected over time.",
    "Playing music can enhance your cognitive abilities and memory!",
    "Experimenting with new recipes can lead to delicious surprises!",
    "Learning to code can open up numerous career opportunities!"
];

document.getElementById("funFactButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById("funFact").textContent = funFacts[randomIndex];
});

// Background music functionality
window.onload = function() {
    const music = document.getElementById("backgroundMusic");
    music.play().catch(function(error) {
        console.log("Playback prevented: " + error);
    });
};