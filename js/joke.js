"use strict";

const getData = () => {
   fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
         if (!response.ok)
            throw new Error("HTTP error fetching joke: " + response.status);
         return response.json();
      })
      .then((data) => toHtml(data))
      .catch((err) => console.log(err));
};

const toHtml = (data) => {
   document.getElementById("category").innerText =
      "Category: " + data.category + " " + (data.flags.nsfw ? "(NSFW)" : "");
   if (data.type == "single") {
      document.getElementById("setup").innerText = data.joke;
      document.getElementById("delivery").innerText = "";
   } else {
      document.getElementById("setup").innerText = "Q: " + data.setup;
      document.getElementById("delivery").innerHTML = "A: " + data.delivery;
   }
};

const init = () => {
   getData();
};

window.onload = init;
