(function ($) {
  $(document).ready(function () {
    // nice-select
    $("select").niceSelect();

    // counter-up
    $(".counter-up").countUp();

    // slider-home1
    $(".slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa-solid fa-arrow-right'></i>",
        "<i class='fa-solid fa-arrow-left'></i>",
      ],
      items: 1,
      dots: false,
    });

    // case-slider
    $(".case-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
    });

    // home4-header-video
    new ModalVideo(".video-1");

    // testimonial-slider
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<i class='fa-solid fa-arrow-right'></i>",
        "<i class='fa-solid fa-arrow-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 3,
        },
      },
    });

    // pricing-plan-tab
    $("#ce-toggle").click(function (event) {
      $(".plan-toggle-wrap").toggleClass("active");
    });

    $("#ce-toggle").change(function () {
      if ($(this).is(":checked")) {
        $(".tab-content #yearly").hide();
        $(".tab-content #monthly").show();
      } else {
        $(".tab-content #yearly").show();
        $(".tab-content #monthly").hide();
      }
    });

    // header-slider-home4
    if ($(".slider-wrap").length > 0) {
      $(".slider-wrap").owlCarousel({
        items: 1,
        loop: true,
        //  autoplay: true,
        //  autoplayTimeout: 5000,
      });
    }

    // page-progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });

  $(window).on("load", function (event) {
    setTimeout(function () {
      $("#preloader").fadeToggle();
    }, 1500);
  });
})(jQuery);

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:

  disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
