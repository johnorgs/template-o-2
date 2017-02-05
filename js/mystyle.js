
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});

$(document).ready(function(){
    
    // Menu Function
    $('.nav-button').click(function(){ 
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open'); 
        return false;
    });
    
    // Food Menu function
    $('.nav-link.the-menu').click(function(){
        $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
        $('.menu-container').addClass('displayed');
        return false;
    });
    
    // closing the menu-overlay
    $('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});
    // preventing clicks on the menu closing it for now because there is nothing inside yet.
    $('.tab.menu-tab').click(function(){ return false; }); 
    
    // Window scroll function
    $(window).scroll(function(){
        
        if($(window).scrollTop() > screen.height-150) {
            $('.nav-button, .search-button').addClass('black');
        } else {
            $('.nav-button, .search-button').removeClass('black');
        }    
    });
    
});


var amountScrolled = 300;
$(window).scroll(function() {
  if ( $(window).scrollTop() < amountScrolled ) {
    $('div.logo').fadeIn('slow');
  } else {
    $('div.logo').fadeOut('slow');
  }
});

