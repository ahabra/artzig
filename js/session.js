
export function getIframe() {
  return sessionStorage.getItem('iframeSrc')
}

export function setIframe(iframeSrc) {
  sessionStorage.setItem('iframeSrc', iframeSrc)
}

