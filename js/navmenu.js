"use strict";

jQuery(window).on("scroll", function () {
  if (1000 < jQuery(this).scrollTop()) {
    jQuery("#sub-nav").addClass("m_fixed");
  } else {
    jQuery("#sub-nav").removeClass("m_fixed");
  }
});
