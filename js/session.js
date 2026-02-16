(function() {

const public = {
  session: {
    getIframe, setIframe
  }
}
globalThis.app = {...globalThis.app, ...public}

function getIframe() {
  return sessionStorage.getItem('iframeSrc')
}

function setIframe(iframeSrc) {
  sessionStorage.setItem('iframeSrc', iframeSrc)
}

})();