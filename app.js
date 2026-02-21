import * as session from './js/session.js'
import * as utils from './js/utils.js'


const sidenav = document.querySelector("#sidenav");

function setHamburgerOnClick() {
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


const iframe = document.getElementById('contentFrame')

function showLinksInIframe() {
  const links = document.querySelectorAll('a.in-frame')
  links.forEach(link => {
    link.onclick = ev => {
      ev.preventDefault()
      iframe.src = link.href
      session.setIframe(link.href)
    }
  })
}

function restoreIframe() {
  const src = session.getIframe()
  if (src) {
    iframe.src = src
  }
}

function init() {
  showLinksInIframe()
  restoreIframe()
  setHamburgerOnClick()
}

init()

