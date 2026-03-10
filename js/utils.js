
const RESPONSIVE_WIDTH = 600;


export function isMobile() {
  return window.matchMedia(`only screen and (max-width: ${RESPONSIVE_WIDTH}px)`).matches
}

// art.now.247@gmail.com

// art_$$_n[the fox]ow_$$_247=ser[a rt]ver_$$_com[42 pages]

/**
 * decode an obfuscated email, to help with spammers
 * 1. remove all square brackets and their content
 * 2. replace equals sign with at sign
 * 3. replace "_$$_" with dot
 * 4. replace "server" with "gmail"
 * For Example:
 * foo_$$_n[the fox]ow_$$_bar=ser[a rt]ver_$$_com[42 pages]
 * will become foo.now.bar@gmail.com
 */
function decodeEmail(encoded) {
  const regex = /\[.*?\]/g
  return encoded.replaceAll(regex, '')
    .replace('=', '@')
    .replaceAll('_$$_', '.')
    .replace('server', 'gmail')
}


export function displayEmail() {
  document.querySelectorAll('.email').forEach(el => {
    const email = el.innerText.trim()
    el.innerText = decodeEmail(email)
  })
}
