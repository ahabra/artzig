const sidenav = document.querySelector("#sidenav");
const ham = document.querySelector('.hamburger')

export function defineClickHandler() {
  ham.onclick = () => {
    ham.classList.toggle('rotate90Deg')
    sidenav.classList.toggle('active')
  }
}

