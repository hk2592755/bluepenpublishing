jQuery(function () {

        $('.readMore-btn').on('click', function () {
        $('.SEO-content').slideToggle();
    });


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".StickyCta").addClass("scrolled");
        } else {
            $(".StickyCta").removeClass("scrolled");
        }
    });

    $(".openDropdown").on("click", function () {
        $('ul.dropDown').hide();
        $(this).prev().show();
    });
    $(".mobileMenuIcon").on("click", function () {
        $('.headerMenuMain').addClass('showMenu');
    });
    $(".headerMenuWrap ul li a, .closeMenu").on("click", function () {
        $('.headerMenuMain').removeClass('showMenu');
    });

    setTimeout(function () {
        $('#loader-wrapper').addClass('downloader');
    }, 200);
    setTimeout(function () {
        $('.loading-bg-black').addClass('downloader');
    }, 700);

    setTimeout(function () {
        $('.welcomepopupMain').addClass('show');
    }, 1300);

    $(".openPopup").on("click", function () {
        $('.popupMain').addClass("show");
    });
    $(".popupClose").on("click", function () {
        $('.popupMain').removeClass("show");
        $('.popupBox').removeClass("show");
        $('.welcomepopupMain').removeClass("show");
    });

    const swiper5 = new Swiper('.mySwiperFive', {
        // Optional parameters
        slidesPerView: 1,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 1,
            },

        },
    });

    const swiper = new Swiper('.testLeftImage', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            dynamicBullets: true,
        },
    });

    $(".prevArrow").on("click", function () {
        $(".testLeftImage .swiper-button-prev").click();
    });
    $(".nextArrow").on("click", function () {
        $(".testLeftImage .swiper-button-next").click();
    });


    const swiper2 = new Swiper('.mySwiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 120,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
        },

        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

        },
    });

    const swiper3 = new Swiper('.mySwiperThree', {
        // Optional parameters
        slidesPerView: 3,
        loopFillGroupWithBlank: false,
        loop: true,
        spaceBetween: 120,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },

        breakpoints: {
            425: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

        },
    });

    const swiper4 = new Swiper('.mySwiperFour', {
        // Optional parameters
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },

        },
    });

    $(".swiper-button-prev-has").on("click", function () {
        $(".swiper-button-prev").click();
    });
    $(".swiper-button-next-has").on("click", function () {
        $(".swiper-button-next").click();
    });


    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".set .content").slideUp(200);
        } else {
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".set .content").slideUp(200);
            $(this).siblings(".set .content").slideDown(200);
        }
    });

    $('[data-target]').on('click', function (e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var target = $(this).data('target');
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
        $('.app-slider').slick("setPosition", 0);
        $('.app-slider-two').slick("setPosition", 0);
    });


    var typed = new Typed('.typed', {
        strings: ["Publishing", "Marketing", "Ghostwriting", "Editing"],
        typeSpeed: 50,
        startDelay: 50,
        backSpeed: 50,
        loop: true,
        loopCount: 500,
        cursorChar: ""
    });


});