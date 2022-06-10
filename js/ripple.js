//Ripple Event Handler
const drawRipple = function (ev) {
   let node = document.querySelector(".ripple");
   let newNode = node.cloneNode(true);
   newNode.classList.add("animate");
   newNode.style.left = ev.clientX - 5 + "px";
   newNode.style.top = ev.clientY - 5 + "px";
   node.parentNode.replaceChild(newNode, node);
};

//Ripple Triggers
window.addEventListener("click", drawRipple);
