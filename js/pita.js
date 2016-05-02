// $(function() {
//   $('#slides').superslides({
//     hashchange: true
//   });
// });




$(document).ready(function() {
$(".swiper-container").swiper({
        // pagination: '.swiper-pagination',
        // slidesPerView: 1,
        // paginationClickable: true,
        // spaceBetween: 30,
        // keyboardControl: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        keyboardControl: true,
        effect: 'fade',
        grabCursor: true
    });

});
// $(document).ready(function() {
 
//   $(".owl-carousel").owlCarousel({
 
//       navigation : false, // Show next and prev buttons
//       slideSpeed : 200,
//       paginationSpeed : 400,
//       singleItem: true
 
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
 
//   });
 
// });
