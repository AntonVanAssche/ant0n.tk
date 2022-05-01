"Use strict";

function crash() {
   // Ask to confirm the cookie.
   if (confirm("Are you sure you want to continue?") == true) {
      alert("Click 'OK' to get a cookie.");

      // Start the crash sequence.
      while (1) {
         document.write("This code will crash your browser!!!<br/>");
      }
   } else {
      alert("You just avoided a crash sequence.\n\nYou lucky bastard!!!");
   }
}
