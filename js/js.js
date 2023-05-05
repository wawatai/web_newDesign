//ad
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
    var betswiper = new Swiper('.betswiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next02',
            prevEl: '.swiper-button-prev02',
          },
    });
})
//appAD
$(function(){
    $(".appAD .getIN").hover(function(){
        $(".mainObj ")
        .addClass("active");
        $(".coinAll")
        .addClass("active");
        $(".light01")
        .addClass("active");
        $(".light02")
        .addClass("active");
    }, function(){
        $(".mainObj")
        .removeClass("active");
        $(".coinAll")
        .removeClass("active");
        $(".light01")
        .removeClass("active");
        $(".light02")
        .removeClass("active");
    })

})
//aside
$(function(){
    $("aside .app").click(function(){
        $(".app ul")
        .toggleClass("active");
    })
    $("aside .cs24hr").click(function(){
        $(".cs24hr ul")
        .toggleClass("active");
    })
})
