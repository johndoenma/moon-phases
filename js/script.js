
// SWIPERJS 

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    mousewheel: true,
    loop: true,
    // effect: 'slide',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    hashNavigation: {
        watchState: true,
    },
    

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

// SCROLL-TRIGGERED ANIMATIONS

});

