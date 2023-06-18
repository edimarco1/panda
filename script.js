document.addEventListener("DOMContentLoaded", function() {
// Define an array of fake certificates
var certificates = [
  { id: 1, name: "Certificate 1" },
  { id: 2, name: "Certificate 2" },
  { id: 3, name: "Certificate 3" }
];

// Create a certificate selection dialog
var certificatePrompt = "Please select your certificate:";
certificates.forEach(function (cert) {
  certificatePrompt += "\n\n" + cert.id + ". " + cert.name;
});

// Display the certificate selection dialog
var selectedCertificate = null;
certificates.forEach(function (cert) {
  var confirmation = window.confirm(certificatePrompt + "\n\n" + cert.name);
  if (confirmation) {
    selectedCertificate = cert;
  }
});

// Check if a certificate was selected
if (selectedCertificate) {
  // Display the PIN input prompt
  var pin = window.prompt("Please enter your PIN:", "");

  // Proceed with the demonstration
  console.log("Certificate: " + selectedCertificate.name);
  console.log("PIN: " + pin);
  // You can perform additional actions or logic here based on the selected certificate and PIN
} else {
  console.log("Certificate selection canceled");
}


});
