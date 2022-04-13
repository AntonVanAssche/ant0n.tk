// Redirect to the page set in `setLink()` after 2000ms
var redirect = setInterval(function () {
   setLink();
}, 2000);

// Set link to redirect to
function setLink() {
   window.location = "https://bit.ly/3szwQv1";
}
