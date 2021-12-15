// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// get items
const btnToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// toggle class on links
btnToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
