// export let activeLink = document.querySelector('._sub-menu-active');
// export let activeBlock = document.querySelector('._sub-menu-open');

export function menuCatalog () {
  document.addEventListener("click", documentActions);

  const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
  if (menuBlocks.length) {
    menuBlocks.forEach(menuBlock => {
      const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
      menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
    })
  }

  function documentActions(e) {
    const targetElement = e.target;
    const subMenuCatalog = document.querySelector('.sub-menu-catalog');
    if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
        // const activeLink = document.querySelector('._sub-menu-active');
        const activeLink = document.querySelector('.bottom-header__link--active');
        // const activeBlock = document.querySelector('._sub-menu-open');
        const activeBlock = document.querySelector('.sub-menu-catalog__block--open');

        if (activeLink && activeLink !== targetElement) {
          // activeLink.classList.remove('_sub-menu-active');
          activeLink.classList.remove('bottom-header__link--active');
          // activeBlock.classList.remove('_sub-menu-open');
          activeBlock.classList.remove('sub-menu-catalog__block--open');
          // document.documentElement.classList.remove('sub-menu-open');
          subMenuCatalog.classList.remove('sub-menu-catalog--open');
        }
        // document.documentElement.classList.toggle('sub-menu-open');
        subMenuCatalog.classList.toggle('sub-menu-catalog--open');
        // targetElement.classList.toggle('_sub-menu-active');
        targetElement.classList.toggle('bottom-header__link--active');
        // subMenu.classList.toggle('_sub-menu-open');
        subMenu.classList.toggle('sub-menu-catalog__block--open');
      } else {
        console.log('Ой ой, нет такого подменю :(');
      }
      e.preventDefault();
    }
    if (targetElement.closest('.sub-menu-catalog__close')) {
      // document.documentElement.classList.remove('sub-menu-open');
      subMenuCatalog.classList.remove('sub-menu-catalog--open');
      // document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('.bottom-header__link--active') ? document.querySelector('.bottom-header__link--active').classList.remove('bottom-header__link--active') : null;
      // document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
      document.querySelector('.sub-menu-catalog__block--open') ? document.querySelector('.sub-menu-catalog__block--open').classList.remove('sub-menu-catalog__block--open') : null;
      e.preventDefault();
    }
  }

}