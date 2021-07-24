// focusin event
export function addFocusinEventListener(source, cb) {
  source.addEventListener('mouseenter', cb)
}
export function removeFocusinEventListener(source, cb) {
  source.removeEventListener('mouseenter', cb)
}

// focusout event
export function addFocusoutEventListener(source, cb) {
  source.addEventListener('mouseleave', cb)
}
export function removeFocusoutEventListener(source, cb) {
  source.removeEventListener('mouseleave', cb)
}
