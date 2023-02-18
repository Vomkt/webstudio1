let $ = jQuery;

$(document).ready(function(){
    $('.team__item-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: '.decbase-arrows',
        prevArrow: '.decbase-arrows__btn--prev',
        nextArrow: '.decbase-arrows__btn--next',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});

// $('.team__item-wrapper').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });