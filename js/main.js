AOS.init();

$('.nav__toggle').on('click', () => {
  console.log('ok');
  $('.nav__toggle').toggleClass('active');
  $('.nav__list').toggleClass('active');
});

// carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    }
  }
});