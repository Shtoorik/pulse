// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 1200,
//     // adaptiveHeight: true,
//     prevArrow: '<button type="button" class="slick-prev"><img src="img/technical/left@2x.png" alt="" width="31" height="50" /></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="img/technical/right@2x.png" alt="" width="30" height="50" /></button>',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           dots: true,
//           arrows: false
//         }
//       }
//     ]
//   });
// });
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  /* //autoplay: true
  controlsText: [
    '<img src="img/technical/left@2x.png" alt="" width="31" height="50" />',
    '<img src="img/technical/right@2x.png" alt="" width="30" height="50" />'
  ] */
  controls: false,
  nav: false
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
(function ($) {
  $(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on('click', function (e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function () {
      $('.overlay,#consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
      $('.overlay,#consultation,#thanks,#order').fadeOut('slow')
    });
    /*   $('.button_mini').on('click', function () {
        $('.overlay,#order').fadeIn('slow');
      }); */
    $('.button_mini').each(function (i) {
      $(this).on('click', function () {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay,#order').fadeIn('slow');
      })
    });
  });
})(jQuery);