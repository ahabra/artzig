(function() {
globalThis.app ={
  toggleSidenav
}

const RESPONSIVE_WIDTH = 600;
const sidenav = document.querySelector("#sidenav");

function toggleSidenav() {
  if (isMobile()) {
    sidenav.classList.remove("min");
    sidenav.classList.toggle("active")
  } else {
    sidenav.classList.remove("active")
    sidenav.classList.toggle("min")
  }
}

function isMobile() {
  return window.matchMedia(`only screen and (max-width: ${RESPONSIVE_WIDTH}px)`).matches
}

})();
