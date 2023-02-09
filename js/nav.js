"use strict";

/**
    * Function to execute when the menu button is clicked.
    * Toggle the menu bar and nav.
*/
const menuOnClick = () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
};

/**
    * Function to ececute when a nav link is clicked.
    * Close the menu and scroll to the section.
    * @param {string} section: The section to scroll to.
*/
const navLinkOnClick = (section) => {
    // Scroll to the section.
    document.getElementById(section).scrollIntoView();

    // Close the menu.
    menuOnClick();
}
