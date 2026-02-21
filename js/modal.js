
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

function clearModal() {
  const modal= getModal()
  if (modal !== null) {
    modal.remove()
  }
}

function adjustSize() {
  const modalContent = document.querySelector('.modal-content')
  const img = modalContent.querySelector('img')

  img.addEventListener('load', ()=> {
    const imgHeight = img.height
    const imgWidth = img.width

    console.log('img Width=', imgWidth, 'Height=', imgHeight)
    console.log('modalContent Width=', modalContent.offsetWidth, 'Height=', modalContent.offsetHeight)

    // if (modalContent.height > imgHeight) {
      modalContent.style.height= `${400}px`
    // }

    // if (modalContent.width > imgWidth) {
      modalContent.style.width= `${1000}px`
    // }
  })

  if (img.complete) {
    img.dispatchEvent(new Event('load'))
  }

}

function showModal(imgSrc, alt='') {
  clearModal()
  const html = buildHtml(imgSrc, alt)
  document.body.insertAdjacentHTML('beforeend', html)
  // adjustSize()
  defineClosers()
  getModal().style.display = 'block'
}


function detailsModal() {
  const links = document.querySelectorAll('#details a')
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
