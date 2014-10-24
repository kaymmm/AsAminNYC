/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
'use strict';
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a').bind('click', function(event) {
      if ($.attr(this, 'href') === '#') {
        //discard empty anchors
        event.preventDefault();
        return 0;
      }
      var nudge = $.attr(this, 'href') === '#about' ? 50 : 0;
        $('html, body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').height() + nudge
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($('.navbar').offset().top >= $('header').height()) {
        $('.navbar-fixed-top').addClass('navbar-shrink');
    } else {
        $('.navbar-fixed-top').removeClass('navbar-shrink');
    }
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: $('.navbar').height()
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Initialize parallax effect
$(function(){
    $('.parallax').simpleParallax();
});

// Initialize sliding panel
$('.toggle-panel').click(function() {
  var $container = $($(this).data('container'));
  var $target = $($container.children($(this).data('target')));

  $target.toggleClass('offcanvas');
  $target.toggleClass('oncanvas');
  if ($container.find('.oncanvas').length !== 0) {
    $container.css('height',$container.children('.oncanvas').height());
  } else {
    $container.css('height',0);
  }
});
$(function() {

    var resizeTimer; // Set resizeTimer to empty so it resets on page load

    function resizeFunction() {
      $('.toggle-panel').each(function() {
        var $container = $($(this).data('container'));
        $container.css('height',$container.children('.oncanvas').height());
      });
    }

    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 500);
    }).resize();
});

// Timeline toggles
$('.toggle-timeline').click(function() {
  $($(this).data('target')).slideToggle();
});
