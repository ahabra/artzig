import * as utils from './utils.js'

const sidenav = document.querySelector("#sidenav");
const ham = document.querySelector('.hamburger')

export function defineClickHandler() {
  ham.onclick = () => {
    ham.classList.toggle('rotate90Deg')
    if (utils.isMobile()) {
      sidenav.classList.remove('min');
      sidenav.classList.toggle('active')
    } else {
      sidenav.classList.remove('active')
      sidenav.classList.toggle('min')
    }

  }
}

