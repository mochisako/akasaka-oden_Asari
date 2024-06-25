"use strict";

$(".nav_toggle").on("click", function () {
  $(".nav_toggle, .nav").toggleClass("show");
});

$(".nav.show").on("click", function () {
  $(".nav_toggle, .nav").removeClass("show");
});
