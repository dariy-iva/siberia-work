export function toggleBodyOverflow(menuIsOpen) {
  if (typeof document !== 'undefined') {
    const body = document.querySelector('.body')
    menuIsOpen ? body.classList.remove('body_hidden') : body.classList.add('body_hidden');
  }
}
