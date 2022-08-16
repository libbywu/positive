$(document).ready(function(){

    //hamburger_menu 

    function slideMenu() {
      var activeState = $(".nav-menu").hasClass("active");
      if(activeState=true) {
        $(".responsive").next().removeClass("active");
      }
    }

    $('.responsive').click(function(event) {
      event.stopPropagation();
      $('.hamburger_menu').toggleClass("animate");
      $('.nav-menu').toggleClass("open");
      slideMenu();
    });

        //NAV SHOW - HIDE
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll > 200 && $(window).width() > 768) {
            $("#main-nav").slideDown(700);
          } else if ( $(window).width() < 769){
            $("#main-nav").show();
          } else {
            $("#main-nav").slideUp(700);
          }
        });
  
    //list
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      $(document).off("scroll");

      if ($(window).width() < 769) {
        $('.nav-menu').addClass("active");
        $('.hamburger_menu').removeClass("animate");
        $('.nav-menu').removeClass("open");
      } 

      // $(this).addClass('active');

      var target = this.hash,
          menu = target;

      target = $(target);
      $('html, body').stop().animate({
        'scrollTop': target.offset().top - 60
      }, 500, 'swing', function() {
        window.location.hash = target.selector;
      });

    });


    //tenyear and googleats pages

    $('.topscroll a').click(function (event) {
      event.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 1000);
    });
      //googleats
      $("#button1").click(function () {
        $(".gaimg-1").slideToggle("slow");
    });

    $("#button2").click(function () {
        $(".gaimg-2").slideToggle("slow");
    });

    $("#button3").click(function () {
        $(".gaimg-3").slideToggle("slow");
    });



});