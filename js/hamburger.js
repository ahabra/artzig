import * as utils from './utils.js'

const sidenav = document.querySelector("#sidenav");

export function defineClickHandler() {
  const ham = document.querySelector('.hamburger')
  ham.onclick = toggleSidenav
}

function toggleSidenav() {
  if (utils.isMobile()) {
    sidenav.classList.remove("min");
    sidenav.classList.toggle("active")
  } else {
    sidenav.classList.remove("active")
    sidenav.classList.toggle("min")
  }
}
