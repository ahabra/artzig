
function buildHtml(imgSrc, alt) {
  return `	
<div id="modal-img" class="modal">
	<div class="modal-content">
		<span class="close">&times;</span>
		<img src="${imgSrc}" alt="${alt}" width="100%"/>
	</div>
</div>`
}

function defineEvents() {
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

function clearModal() {
  const modal= getModal()
  if (modal !== null) {
    modal.remove()
  }
}

function showModal(imgSrc, alt='') {
  clearModal()
  const html = buildHtml(imgSrc, alt)
  document.body.insertAdjacentHTML('beforeend', html)
  defineEvents()
  getModal().style.display = 'block'
}

function detailsModal() {
  const links = document.querySelectorAll('.details a')
  links.forEach(link => {
    const imgSrc = link.href
    const alt = link.innerText
    link.onclick = ev => {
      ev.preventDefault()
      showModal(imgSrc, alt)
    }
  })
}

detailsModal()
