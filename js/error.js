"Use strict";

for (let i = 0; i < 100; i++) {
   setTimeout(() => {
      new Audio("/audio/windows-error.mp3").play();
      alert("OH NO IT LOOKS LIKE AN ERROR OCCURRED");
   }, 1000);
}
