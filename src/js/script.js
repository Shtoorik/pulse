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
