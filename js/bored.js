"use strict";

// Get the count from localStorage if it exists.
// If it doesn't exist, set the count to 0.
let count = localStorage.getItem("count") || 0;

const playHitmarkerSound = async () => {
    const audio = new Audio("/assets/audio/hitmarker.mp3");
    audio.play();
};

// Open a new tab and play Never Gonna Give You Up.
const rickRoll = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
};

const countUp = () => {
    count++;

    // Construct the message to display.
    let message =
        count % 69 === 0
            ? `Get rick rolled!`
            : "You have clicked the button " +
              count +
              (count > 1 ? " times." : " time.");

    // Display the count on the page.
    document.getElementById("count").innerText = message;

    // Play the hitmarker sound.
    playHitmarkerSound();

    // Save the count in localStorage.
    localStorage.setItem("count", count);

    // If the count is divisible by 69, rick roll the user.
    if (count % 69 === 0) {
        rickRoll();
    }

    // Add the a small chance of rick rolling the user.
    // This is to prevent the user from getting bored.
    // if (Math.random() < 0.1) {
    //     rickRoll();
    // }
};

// Event listener for the button
document.getElementById("bored-button").addEventListener("click", countUp);
