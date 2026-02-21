import * as session from './js/session.js'
import * as hamburger from './js/hamburger.js'


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
  hamburger.defineClickHandler()
}

init()

