// import { activeLink, activeBlock } from '../page-main/_menu.js';

export function burger () {
  document.addEventListener('click', burgerClick);

  function burgerClick (e) {
    const targetElement = e.target;
    const hiddenMenu = document.querySelector('.header__hidden-menu');
    // const activeLink = document.querySelector('._sub-menu-active');
    const activeLink = document.querySelector('.bottom-header__link--active');
    // const activeBlock = document.querySelector('._sub-menu-open');
    const activeBlock = document.querySelector('.sub-menu-catalog__block--open');
    const subMenuCatalog = document.querySelector('.sub-menu-catalog');
    const subMenuCatalogOpen = document.querySelector('.sub-menu-catalog--open');

    if(targetElement.closest('.icon-menu')) {
      const icon = targetElement.closest('.icon-menu');
      icon.classList.toggle('icon-menu--open');
      hiddenMenu.classList.toggle('header__hidden-menu--active');
      document.body.classList.toggle('body-lock');

      // if (document.documentElement.classList.contains('sub-menu-open'))
      if (subMenuCatalogOpen) {
        // document.documentElement.classList.remove('sub-menu-open');
        subMenuCatalog.classList.remove('sub-menu-catalog--open');
        hiddenMenu.classList.remove('header__hidden-menu--active');
        // activeLink.classList.remove('_sub-menu-active');
        activeLink.classList.remove('bottom-header__link--active');
        // activeBlock.classList.remove('_sub-menu-open');
        activeBlock.classList.remove('sub-menu-catalog__block--open');
      }
    }
  }
}

