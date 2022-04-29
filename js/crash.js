"Use strict";

function crash() {
   // Ask to confirm crash sequence.
   if (confirm("Are you sure you want to continue?") == true) {
      alert("Click 'OK' to start the crash sequence.");

      // Start the crash sequence.
      while (1) {
         document.write("This code will crash your browser!!!<br/>");
      }
   } else {
      alert("Aborted the crash sequence.\n\nYou lucky bastard!!!");
   }
}
