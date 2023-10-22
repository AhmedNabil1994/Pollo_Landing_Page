(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Back to top button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'linear');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

window.addEventListener("load", function() {
  let imageFullScreen = document.getElementById("lang-image");
  let imageMobile = document.querySelector(".lang-image");
  let imageElement = document.getElementById("lang-image");
  let transTextMobile = document.querySelector(".trans-text");

    if($('body').css('direction') == 'ltr'){
        imageFullScreen.src = "../assets/img/egypt.png"     
        imageMobile.src = "../assets/img/egypt.png"     
        transTextMobile.textContent = "Arabic"     
    }else{
        imageFullScreen.src = "../assets/img/united-kingdom.png"     
        imageMobile.src = "../assets/img/united-kingdom.png"     
        transTextMobile.textContent = "English"     
        }

});




