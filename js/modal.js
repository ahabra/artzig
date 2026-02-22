(function () {

function detailsModal() {
  const links = document.querySelectorAll('table.details a')
  links.forEach(link => {
    const imgSrc = link.href
    const alt = link.innerText
    link.onclick = ev => {
      ev.preventDefault()
      showModal(imgSrc, alt)
    }
  })
}

function showModal(imgSrc, alt='') {
  clearModal()
  const html = buildHtml(imgSrc, alt)
  document.body.insertAdjacentHTML('beforeend', html)
  defineClosers()
  getModal().style.display = 'block'
}

function clearModal() {
  const modal= getModal()
  if (modal !== null) {
    modal.remove()
  }
}

function buildHtml(imgSrc, alt) {
  return `	
    <div id="modal-img" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="title">${alt}</span>
          <span class="close">&times;</span>
        </div>
        <img src="${imgSrc}" alt="${alt}"/>
      </div>
    </div>`
}

function defineClosers() {
  const close = ()=> modal.style.display = 'none'
  const closeBtn = document.querySelector('.close') 
  closeBtn.onclick = close

  const modal = getModal()
  window.onclick = ev=> {
    if (ev.target === modal) {
      close()
    }
  }
}

function getModal() {
  return document.getElementById('modal-img')
}


detailsModal()

})()