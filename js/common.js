jQuery(function ($) {

    'use strict';
	
// =============================================
// BEGIN THEME SCRIPTS
// =============================================


// Script Wow Animation
new WOW().init();

//Parallax	
jQuery(window).bind('load', function () {
	parallaxInit();						  
});
function parallaxInit() {
    jQuery('.parallax').each(function(){
        jQuery(this).parallax("30%", 0.1);
    });
}

// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -40
        }, 1000);
        return false;
      }
    }
  });
});

//switch to active navigation
	$(document).ready(function() {
		 $('#myNavbar ul li a').on('click', function(e) {
		   
		 $('a').each(function(){
			  $(this).removeClass('active');
		 })
		 $(this).addClass("active");
		 });
	});

// =============================================
// END THEME SCRIPTS
// =============================================
	
});

/*
function setActive() {
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}
window.onload = setActive;*/
