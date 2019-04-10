$(function() {
  var target1 = $(".eight-wrapper");
  var targetPosOT1 = target1.offset().top;
  var targetFactor = -0.2;
  var windowH = $(window).height();
  var scrollYStart = targetPosOT1 - windowH;
  var homeTag = $(".Home-tag");
  var accessTag = $(".Access-tag");
  var reservationTag = $(".Reservation-tag");
  var recruitTag = $(".Recruit-tag");
  var sixthWrapper = $(".sixth-wrapper").offset().top;
  var seventhWrapper = $(".seventh-wrapper").offset().top;
  var ninthWrapper = $(".ninth-wrapper").offset().top;


  $(window).on('scroll', function() {
    var scrollY = $(this).scrollTop();
    if (scrollY > scrollYStart) {
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
    } else {
      target1.css('background-position', 'center top');
    }


    if (scrollY <= sixthWrapper-1) {
      homeTag.addClass('Select-tag').removeClass('tag');
    }
    if (scrollY > sixthWrapper-1 && scrollY <= seventhWrapper-1) {
      homeTag.addClass('tag').removeClass('Select-tag'), accessTag.addClass('Select-tag').removeClass('tag');
    } else {
      accessTag.addClass('tag').removeClass('Select-tag');
    }
    if (scrollY > seventhWrapper-1 && scrollY <= ninthWrapper-1) {
      accessTag.addClass('tag').removeClass('Select-tag'), reservationTag.addClass('Select-tag').removeClass('tag');
    } else {
      reservationTag.addClass('tag').removeClass('Select-tag');
    }
    if (scrollY > ninthWrapper-1) {
      reservationTag.addClass('tag').removeClass('Select-tag'), recruitTag.addClass('Select-tag').removeClass('tag');
    } else {
      recruitTag.addClass('tag').removeClass('Select-tag');
    }
  })
  homeTag.click(function(){
    $("html,body").animate({scrollTop:0},{duration:1000});
  })
  accessTag.click(function(){
    $("html,body").animate({scrollTop:sixthWrapper},{duration:1000});
  })
  reservationTag.click(function(){
    $("html,body").animate({scrollTop:seventhWrapper},{duration:1000});
  })
  recruitTag.click(function(){
    $("html,body").animate({scrollTop:ninthWrapper},{duration:1000});
  })

});
