(function ($, window, document) {
    "use strict";
    $(document).on('ready', function () {
        //nav menu active class//
        $('#navbarNav ul li').on('click', function(){
            $('#navbarNav li').removeClass("active");
            $(this).addClass("active");
        });

        // Open Search Bar //
        $(".search-icon").on("click",function (){
            $(".popup-search-bar").addClass("search-open");
            return false;
        });
        $(".search-close").on("click",function (){
            $(".popup-search-bar").removeClass("search-open");
        });

        let shopWrapper = $('.menu-items'),
            allSelectFields = $('select'),
            photoGallery = $('.photo-gallery');

        if (shopWrapper.length > 0) {
            mixitup('.menu-items');
        }

        window.addEventListener("scroll", function () {
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);

        });

        if (allSelectFields.length > 0) {
            allSelectFields.niceSelect();
        }

        if (photoGallery.length > 0) {
            photoGallery.lightGallery();
        }

        $('.customer-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class=\"icofont-simple-left\"></i>", "<i class=\"icofont-simple-right\"></i>"],
            dots: false,
            items: 1,
            autoplay: false,
        });

        $('#date').datepicker({
            dateFormat: 'dd-mm-yy',
        });

        $('#time').timepicker({
            timeFormat: 'h:mm p',
            interval: 30,
            minTime: '10',
            maxTime: '6:00pm',
            defaultTime: '11',
            startTime: '10:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });
        $(".shopping-cart").on("click",function (){
            $(".off-canvas-mini-cart, .off-canvas-overly").addClass("active");
            return false;
        });
        $(".menu-close,.off-canvas-overly").on("click",function (){
            $(".off-canvas-mini-cart, .off-canvas-overly").removeClass("active");
        });
    });
})(jQuery, window, document);
