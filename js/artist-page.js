(function () {

globalThis.app = {
  listAllDetails
}

function listAllDetails(allDetails) {
  allDetails.forEach( ({tableId, details}) => {
    showSingleArtDetails(tableId, details)
  })
}

function showSingleArtDetails(tableId, details) {
  const tbody = document.querySelector(`#${tableId} tbody`)

  let counter = 1
  details.forEach(di=> {
    const row = createRow(counter++, di)
    tbody.insertAdjacentHTML('beforeend', row)
  })
}

function createRow(index, {name, url, size, width, height}) {
  return `
  <tr>
    <th class="number">${index}</th>
    <td><a href="${url}">${name}</a></td>
    <td class="number">${size}</td>
    <td class="number">${width.toLocaleString('en-US')}</td>
    <td class="number">${height.toLocaleString('en-US')}</td>
  </tr>`
}

})()
