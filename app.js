(function() {
const public = {
  toggleSidenav
}

globalThis.app = {...globalThis.app, ...public}

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


const iframe = document.getElementById('contentFrame')

function showLinksInIframe() {
  const links = document.querySelectorAll('a.in-frame')
  links.forEach(link => {
    link.onclick = ev => {
      ev.preventDefault()
      iframe.src = link.href
      app.session.setIframe(link.href)
    }
  })

}

function restoreIframe() {
  const src = app.session.getIframe()
  if (src) {
    iframe.src = src
  }
}

showLinksInIframe()
restoreIframe()

})();
