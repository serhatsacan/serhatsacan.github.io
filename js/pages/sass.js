/*
    js of interior
    --------------------------
    ** Hide header
    --------------------------
    ** Show header
    --------------------------
    ** horizontal scroll
    --------------------------
    ** Toggle for Pricing
    --------------------------
*/

(function ($) {
  "use strict";

  jQuery(document).on('ready', function () {

    $(function () {
      /*-----------------------------
      Hide header
    -----------------------------*/
      // build scene
      var scene = new ScrollMagic.Scene({
        triggerElement: "#triggerForm",
      })
        // trigger animation by adding a css class
        .setClassToggle("#myNavbar", "hideheader")
        .addIndicators({
          name: "1 - add a class",
        }) // add indicators (requires plugin)
        .addTo(controller);

      /*-----------------------------
      Show header
    -----------------------------*/
      // build scene
      var scene = new ScrollMagic.Scene({
        triggerElement: "#triggerTo",
      })
        // trigger animation by adding a css class
        .setClassToggle("#myNavbar", "showheader")
        .addIndicators({
          name: "1 - add a class",
        }) // add indicators (requires plugin)
        .addTo(controller);
    });

    /*-----------------------------
    horizontal scroll
    -----------------------------*/
      // init controller
      var controller = new ScrollMagic.Controller();

      var controller = new ScrollMagic.Controller();

      // define movement of panels
      var wipeAnimation = new TimelineMax().to("#slideContainer", 1, {
        x: "-55%",
      });

      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "350%",
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators()
      .addTo(controller);

      var horizontal = new ScrollMagic.Scene({
        offset: 50,
        duration: 300,
        // reverse: false
      })
      // .addIndicators()
      .addTo(controller);

      /*-----------------------------
      Toggle for Pricing
    -----------------------------*/
    var e = document.querySelectorAll("#filt-monthly"),
        d = document.querySelectorAll("#filt-yearly"),
        t = document.querySelectorAll("#switcher"),
        m = document.querySelectorAll(".monthly"),
        y = document.querySelectorAll(".yearly");

    e.forEach(function (element) {
      element.addEventListener("click", function () {
        t.forEach(function (toggle) {
          toggle.checked = false;
        });
        e.forEach(function (el) {
          el.classList.add("toggler--is-active");
        });
        d.forEach(function (el) {
          el.classList.remove("toggler--is-active");
        });
        m.forEach(function (el) {
          el.classList.remove("hide");
        });
        y.forEach(function (el) {
          el.classList.add("hide");
        });
      });
    });

    d.forEach(function (element) {
      element.addEventListener("click", function () {
        t.forEach(function (toggle) {
          toggle.checked = true;
        });
        d.forEach(function (el) {
          el.classList.add("toggler--is-active");
        });
        e.forEach(function (el) {
          el.classList.remove("toggler--is-active");
        });
        m.forEach(function (el) {
          el.classList.add("hide");
        });
        y.forEach(function (el) {
          el.classList.remove("hide");
        });
      });
    });

    t.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        d.forEach(function (el) {
          el.classList.toggle("toggler--is-active");
        });
        e.forEach(function (el) {
          el.classList.toggle("toggler--is-active");
        });
        m.forEach(function (el) {
          el.classList.toggle("hide");
        });
        y.forEach(function (el) {
          el.classList.toggle("hide");
        });
      });
    });

  });

}(jQuery));
