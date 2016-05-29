$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    lazyLoad: true,
    // nav:true
    responsive : {
        // breakpoint from 0 up
        0 : {
            stagePadding: 0,
        },
        // breakpoint from 480 up
        480 : {
            stagePadding: 0,
        },
        // breakpoint from 768 up
        768 : {
            stagePadding: 50,
        },
        // breakpoint from 1200 up
        1200 : {
            stagePadding: 100,
        }
    }
  });
});
