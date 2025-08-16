// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.menu_button')) {
    var dropdown = document.getElementById("dropdownMenu")
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Display the menu when clickig the menu button
function displayMenu() {
  document.getElementById("dropdownMenu").classList.toggle("show")
}
