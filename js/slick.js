$(function () {
  $(".t-i-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-i-reviews-list-left",
    nextArrow: ".t-i-reviews-list-right",
  });
});
$(function () {
  $(".t-i-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-i-gallery-list-left",
    nextArrow: ".t-i-gallery-list-right",
  });
});
