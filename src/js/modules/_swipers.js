import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

function initSliders() {
  if(document.querySelector('.educational-programs__slider')) {
    new Swiper('.educational-programs__slider', {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 27,
      autoHeight: false,
      pagination: {
        el: '.educational-programs__pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
        920: {
					slidesPerView: 3,
					spaceBetween: 27,
				},
				1170: {
					slidesPerView: 4,
					spaceBetween: 27,
				},
			},
    })
  }
}

window.addEventListener('load', function(e) {
  initSliders();
});
