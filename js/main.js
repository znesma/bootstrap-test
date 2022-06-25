// slider
$(function () {
    
    'use strict';
    
    var windowHeight = $(window).height(),
        upperHeight  = $('.upper-nav').innerHeight(),
        navHeight    = $('.navbar').innerHeight();
    $('.slider .carousel-item').height(windowHeight - (upperHeight + navHeight));

});

/* featured work

$(".work button").hover(function () {
   
    "use strict";
    $(this).css({
        color: '#f00',
        border: '1px solid red'
    },2000 ,function () {
        $(this).css('color','#008');
    });
    
});
*/

//shuffling

$(".work ul li").on('click', function () {
    
    $(this).addClass('active').siblings().removeClass('active');
    
    //console.log($(this).data('class'));
    var custom = $(this).data('class');
    if (custom === 'all') {
        $('.work .shuffle-word .row .col-sm img').css('opacity', '1');
        
    } else {
        
        $('.work .shuffle-word .row .col-sm img').css('opacity', '0.5');
        
        $(custom).css('opacity', '1');
    }
});

// testimonials

$('.testimonials').hover(function () {
    
   $('.testimonials .carousel-control-prev ,.testimonials .carousel-control-next').css({
       
       opacity: 1
      
   }); 
}, function () {
    
    $('.testimonials .carousel-control-prev ,.testimonials .carousel-control-next').css({
       
       opacity: 0
      
   });
});













