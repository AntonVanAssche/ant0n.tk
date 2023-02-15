"use strict";

// Fetch a random joke from the API.
const getData = async () => {
    try {
        // Fetch the joke from the API.
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");

        // If the response is not OK, throw an error.
        if (!response.ok)
            throw new Error("HTTP error fetching joke: " + response.status);

        // Convert the response to JSON.
        const json = await response.json();
        return json;
    } catch (error) {
        // If there is an error, display it on the page (DOM) where the
        // category is displayed. Just in case the user visits the page
        // without an internet connection.
        // Add the 'error' class to the category element to make it red.
        document.getElementById("category").classList.add("error");
        document.getElementById("category").innerText = error;
    }
};

// Convert the JSON data to HTML, and display it.
const toHtml = (data) => {
    // If the joke is not safe for work, add 'NSFW' to the joke.
    document.getElementById("category").innerText =
        "Category: " + data.category + " " + (data.flags.nsfw ? "(NSFW)" : "");

    // If the joke is a single joke, display it.
    // If the joke is a two-part joke, display both parts (setup and delivery).
    if (data.type == "single") {
        document.getElementById("setup").innerText = data.joke;
        document.getElementById("delivery").innerText = "";
    } else {
        document.getElementById("setup").innerText = "Q: " + data.setup;
        document.getElementById("delivery").innerHTML = "A: " + data.delivery;
    }
};

// When the page loads, fetch a joke and display it.
getData().then((data) => toHtml(data));
