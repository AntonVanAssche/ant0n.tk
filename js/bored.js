"use strict";

// Get the count from localStorage if it exists.
// If it doesn't exist, set the count to 0.
let count = localStorage.getItem("count") || 0;

const playHitmarkerSound = async () => {
    const audio = new Audio("./audio/hitmarker.mp3");
    audio.play();
};

const countUp = () => {
    count++;

    // Construct the message to display.
    let message = "You have clicked the button " + count + ((count > 1) ? " times." : " time.");

    // Display the count on the page.
    document.getElementById("count").innerText = message;

    // Play the hitmarker sound.
    playHitmarkerSound();

    // Save the count in localStorage.
    localStorage.setItem("count", count);
}

// Event listener for the button
document.getElementById("bored-button").addEventListener("click", countUp);
