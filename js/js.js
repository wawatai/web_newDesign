$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        direction: 'vertical',
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var swiperHG = new Swiper('.swiperHG', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next02',
            prevEl: '.swiper-button-prev02',
          },
    });
})