AOS.init();

const initSwiper = (mainSelector, thumbSelector, isZoom = false) => {
  const thumbSwiper = new Swiper(thumbSelector, {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
  });

  new Swiper(mainSelector, {
    loop: true,
    spaceBetween: 10,
    zoom: isZoom,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbSwiper,
    },
  });
};

// Inicializando os swipers
initSwiper(".mySwiper2", ".mySwiper", true);
initSwiper(".mySwiper4", ".mySwiper3", true);
initSwiper(".mySwiper6", ".mySwiper5", true);
initSwiper(".mySwiper8", ".mySwiper7", true);
initSwiper(".mySwiper10", ".mySwiper9", true);
initSwiper(".mySwiper12", ".mySwiper11", true);

//JQuery: detecta scroll e adiciona a classe scrolled para .header-main suavemente

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".header-main").addClass("scrolled");
  } else {
    $(".header-main").removeClass("scrolled");
  }
});

$(document).ready(function() {
  // Esconde todos os itens do portfólio
  $('[data-portfolio-item]').hide();
  
  // Mostra o primeiro item do portfólio
  $('[data-portfolio-item]').first().show();
  
  // Faz o clique na lista de portfólio mostrar o respectivo item do portfólio
  $('.portfolio__item').on('click', function() {
      var portfolioName = $(this).data('portfolio-nav');
      $('[data-portfolio-item]').hide();
      $('[data-portfolio-item="' + portfolioName + '"]').show();
      
      // Remove a classe 'active' de todos os itens e adiciona ao item clicado
      $('.portfolio__item').removeClass('active');
      $(this).addClass('active');
  });
});
