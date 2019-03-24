$(function(){
  (function ($) {

  	'use strict';

      let scrollPosi = 0;

  	$(window).scroll(function () {
  		scrollPosi = $(document).scrollTop();

          $('eight-wrapper').stop(true, true).animate({
  			'background-position-y': -scrollPosi / 3 + 'px'
  		}, 100);
  	});

  });
});
