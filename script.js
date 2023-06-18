document.addEventListener("DOMContentLoaded", function() {
// Define an array of fake certificates
var certificates = [
  { id: 1, name: "Certificate 1" },
  { id: 2, name: "Certificate 2" },
  { id: 3, name: "Certificate 3" }
];

// Create a prompt to select a certificate
var certificatePrompt = "Please select your certificate:\n";
certificates.forEach(function (cert) {
  certificatePrompt += cert.id + ". " + cert.name + "\n";
});
certificatePrompt += "Enter the certificate number or click Cancel to exit.";

// Display the certificate selection prompt
var certificateChoice = window.prompt(certificatePrompt);

// Check if the user selected a certificate
if (certificateChoice !== null) {
  // Find the selected certificate by its ID
  var selectedCertificate = certificates.find(function (cert) {
    return cert.id === parseInt(certificateChoice);
  });

  if (selectedCertificate) {
    // Display the PIN input prompt
    var pin = window.prompt("Please enter your PIN:", "");

    // Proceed with the demonstration
    console.log("Certificate: " + selectedCertificate.name);
    console.log("PIN: " + pin);
    // You can perform additional actions or logic here based on the selected certificate and PIN
  } else {
    console.log("Invalid certificate selection");
  }
} else {
  console.log("Certificate selection canceled");
}

});
