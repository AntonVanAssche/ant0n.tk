"Use strict";

let audio = new Audio("./sound/windows-error.mp3");

for (let i = 0; i < 50; i++) {
   setTimeout(function () {
      audio.play();
      alert("OH NO IT LOOKS LIKE AN ERROR OCCURRED");
   }, 1000);
}
