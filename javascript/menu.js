function toggleMenu() {
  var destinationsMenu = document.getElementById("destinationsMenu");
  destinationsMenu.classList.toggle("show-menu");
}

window.onclick = function (event) {
  if (!event.target.matches(".menu-toggle")) {
    var destinationsMenu = document.getElementById("destinationsMenu");
    if (destinationsMenu.classList.contains("show-menu")) {
      destinationsMenu.classList.remove("show-menu");
    }
  }
};
