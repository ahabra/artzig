
function buildHtml(imgSrc, alt) {
  return `	
<div id="modal-img" class="modal">
	<div class="modal-content">
		<span class="close">&times;</span>
		<img src="${imgSrc}" alt="${alt}" width="100%"/>
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

function showModal(imgSrc, alt='') {
  clearModal()
  const html = buildHtml(imgSrc, alt)
  document.body.insertAdjacentHTML('beforeend', html)
  defineClosers()
  getModal().style.display = 'block'
}

function showDetails() {
  const tbody = document.querySelector('#details tbody')
  let counter = 1
  detailsImages.forEach(di=> {
    const row = createRow(counter++, di)
    tbody.insertAdjacentHTML('beforeend', row)
  })
}

function createRow(index, {name, url, size, width, height}) {
  return `
  <tr>
    <th class="number">${index}</th>
    <td><a href="details/${url}">${name}</a></td>
    <td class="number">${size}</td>
    <td class="number">${width.toLocaleString('en-US')}</td>
    <td class="number">${height.toLocaleString('en-US')}</td>
  </tr>`
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

showDetails()
detailsModal()
