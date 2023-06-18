document.addEventListener("DOMContentLoaded", function() {
// Display the certificate selection prompt
var certificatePrompt = "Please select your certificate:";
var certificateChoice = window.confirm(certificatePrompt);

// Check if the user selected a certificate
if (certificateChoice) {
  // Display the PIN input prompt
  var pin = prompt("Please enter your PIN:", "");

  // Check if the user entered a PIN
  if (pin !== null) {
    // Proceed with the demonstration
    console.log("Certificate selected");
    console.log("PIN: " + pin);
    // You can perform additional actions or logic here based on the selected certificate and PIN
  } else {
    // User canceled PIN input
    console.log("PIN input canceled");
    document.body.innerHTML = ""; // Clear the page content
  }
} else {
  // User canceled certificate selection
  console.log("Certificate selection canceled");
  document.body.innerHTML = ""; // Clear the page content
}



});
