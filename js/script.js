$(function() {
  var heroSlider = new Swiper('.hero_slider', {
    loop: true,
    speed: 800,
    autoplay: true,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var popularStoresSlider = new Swiper(".popular_stores_slider", {
    loop: true,
    speed: 800,
    autoplay: true,
    centeredSlides: true,
    slidesPerView: "auto",
    grid: {
      rows: 3,
    },
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        centeredSlides: false,
      },
    }
  });

});