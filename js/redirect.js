"Use strict";

const memes = [
   "https://bit.ly/3szwQv1",
   "./memes/ram",
   "./memes/error",
   "./memes/fire",
];

let randomMeme = Math.floor(Math.random() * memes.length);

// Redirect to the page set in `setLink()` after 2000ms
const redirect = setInterval(function () {
   setLink();
}, 2000);

// Set link to redirect to
function setLink() {
   window.location = memes[randomMeme];
}
