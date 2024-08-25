export function groupStatus() {
  const cards = document.querySelectorAll('.slide-educational__card');
  cards.forEach(card => {
    const info = card.querySelector('.slide-educational__info');
    const imgLink = card.querySelector('.slide-educational__img-link');
    const linkTitle = card.querySelector('.slide-educational__link-title');
    if(card.hasAttribute('data-open')) {
      if(card.dataset.open === 'open') {
        card.classList.add('group-open');
        info.innerHTML = 'Группа открыта';
      }
      if(card.dataset.open === 'close') {
        card.classList.add('group-close');
        info.innerHTML = 'Группа закрыта';
        imgLink.style.pointerEvents = 'none';
        linkTitle.style.pointerEvents = 'none';
      }
    }
  })
}