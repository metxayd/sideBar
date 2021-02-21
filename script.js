$('#active').click(function () {

    $('#submenu').toggleClass("submenu-hide");
});

$('.sub-title').click(function () {

    $('#submenu').toggleClass("submenu-hide");
});





    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 5000,
        },
    });