"Use strict";

function crash() {
   // Ask to confirm the cookie.
   if (confirm("Are you sure you want to continue?") == true) {
      alert("BTW: take a look at your RAM usage.");

      // Start the crash sequence.
      while (1) {
         document.write("This code will crash your browser!!!<br/>");
      }
   } else {
      alert("You just avoided a crash sequence.\n\nYou lucky bastard!!!");
   }
}
