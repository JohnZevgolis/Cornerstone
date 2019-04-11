$(document).ready(function() {

    if ($('.hamburger').length > 0) {
        
        $('.hamburger').click(function(){
            $(this).toggleClass("is-active");
            $('.menu-links').toggleClass("is-active");
        });
    }
    
    $('.menu-gallery a').click(function(e){
        e.preventDefault();
        $('.gallery-popup').addClass('active');
    });
    
    $('.gallery-popup').click(function(e){
        e.stopPropagation();
        $('.gallery-popup').removeClass('active');
    });
    
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
           $('.gallery-popup').removeClass('active');
        }
    });
    
    
    setTimeout(function(){
      $('.main-title').addClass('loaded');
      $('.menu-links > li').addClass('loaded');
      $('.animated-elements').addClass('loaded');
      $('.menu-logo').addClass('loaded');
      $('.main').addClass('loaded');
      $('.poster-carousel').addClass('loaded');
      $('.newsletters-content').addClass('loaded');
      $('.newsletter-img').addClass('loaded');
      $('.custom-video').addClass('loaded');
      $('.main-video-img').addClass('loaded');
    }, 300);

    var $aWithId = $('.menu-links a[id]');
    if($aWithId.length) {
        $('.menu-links a').click(function(){
            $(this).preventDefault;
            var $menuLinkID = $(this).attr('id');
            var $menuLinkContent = $('.pop-up[data-id=' + $menuLinkID + ']');
            $menuLinkContent.addClass('active');
        });
    }
    
    $('.pop-up-close').click(function(){
       $('.pop-up').removeClass('active'); 
    });
    
    if($('.poster-owl-carousel').length) {
        $('.poster-owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                800:{
                    items:3
                },
                1366:{
                    items:4
                }
            }
        })
    }
    
    if($('.video-owl-carousel').length) {
        $('.video-owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav: true,
            dots: true,
            items: 1
        })
    }
    
    if($('.interview-main').length) {
        $(".interview-main").mCustomScrollbar({
            axis:"yx",
            scrollButtons:{enable:true},
            theme:"3d",
            scrollbarPosition:"outside"
        });
    }
    
});