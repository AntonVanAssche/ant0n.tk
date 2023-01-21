"use strict";

// Define the toggle button.
const darkModeToggle = document.getElementById("darkmode-toggle");

// Define the toggle button icon.
const darkModeImg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const lightModeImg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

const playSound = async (theme) => {
    const sound = new Audio(`/audio/${theme}.mp3`);
    await sound.play();
};

const setDarkMode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("darkMode", "enabled");
};

const unsetDarkMode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("darkMode", "disabled");
};

const updateButton = () => {
    // Get the current dark mode setting.
    let darkMode = localStorage.getItem("darkMode");
    // Get the user's system preference.
    let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    // Check if dark mode is enabled.
    if (
        darkMode === "enabled" ||
        (darkMode === "system" && prefersDarkScheme.matches)
    ) {
        darkModeToggle.innerHTML = lightModeImg;
    } else {
        darkModeToggle.innerHTML = darkModeImg;
    }
};

darkModeToggle.addEventListener("click", () => {
    // Read the saved 'darkMode' in localStorage.
    let darkMode = localStorage.getItem("darkMode");

    // Get the users system preference.
    let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (
        darkMode === "disabled" ||
        (darkMode === "system" && !prefersDarkScheme.matches)
    ) {
        setDarkMode();
        updateButton();
        playSound("dark");
    } else {
        unsetDarkMode();
        updateButton();
        playSound("light");
    }
});

const init = () => {
    // Read the saved 'darkMode' in localStorage.
    let darkMode = localStorage.getItem("darkMode");

    // Get the users system preference.
    let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // If the user hasn't visited the site before, check their system preference.
    if (darkMode === null) {
        darkMode = prefersDarkScheme.matches ? "system" : "disabled";
    }

    // Set the theme based on the value of 'darkMode'.
    switch (darkMode) {
        case "enabled":
            setDarkMode();
            break;
        case "disabled":
            unsetDarkMode();
            break;
        case "system":
            if (prefersDarkScheme.matches) {
                setDarkMode();
            } else {
                unsetDarkMode();
            }
            localStorage.setItem("darkMode", "system");
            break;
    }
};

window.onload = init;

// When the user changes their system preference, update the theme.
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
        let darkMode = localStorage.getItem("darkMode");
        if (darkMode === "system") {
            e.matches ? setDarkMode() : unsetDarkMode();
            updateButton();
        }
    });
