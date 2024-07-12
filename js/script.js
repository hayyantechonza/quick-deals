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
  var trendingSlider = new Swiper('.trending_slider', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      625: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
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

  var forms = $('.needs-validation');

  forms.each(function() {
    $(this).on('submit', function(event) {
      event.preventDefault()
      if (this.checkValidity() === false) {
        event.stopPropagation()
      }

      $(this).addClass('was-validated');
    })
  });

  setupScrollToTopButton();

  $('.search_form input').on('input', function() {
    var query = $(this).val().trim();
    if (query) {
      $(this).parents('.search_form').find("#search-results").show();
    } else {
      $(this).parents('.search_form').find("#search-results").hide();
    }
  });

});



function setupScrollToTopButton() {
  var scrollToTopBtn = $('<button id="scrollToTopBtn" class="btn"><i class="ph ph-arrow-up"></i></button>');
  scrollToTopBtn.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      scrollToTopBtn.fadeIn(100);
    } else {
      scrollToTopBtn.fadeOut(100);
    }
  });

  scrollToTopBtn.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 50);
  });

  $('body').append(scrollToTopBtn);
}