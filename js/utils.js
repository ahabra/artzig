
const RESPONSIVE_WIDTH = 600;


export function isMobile() {
  return window.matchMedia(`only screen and (max-width: ${RESPONSIVE_WIDTH}px)`).matches
}
