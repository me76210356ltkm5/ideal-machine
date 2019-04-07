$(function(){
  var target1 = $(".eight-wrapper");
  var targetPosOT1 = target1.offset().top;
  var targetFactor = -0.5;
  var windowH = $(window).height();
  var scrollYStart = targetPosOT1 - windowH;
  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();
    if(scrollY > scrollYStart){
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
    }else{
      target1.css('background-position','center top');}
    var homeTag = $(".Home-tag");
    var accessTag = $(".Access-tag");
    var reservationTag = $(".Reservation-tag");
    var recruitTag = $(".Recruit-tag");
    var sixthWrapper = $(".sixth-wrapper").offset().top;
    var seventhWrapper = $(".seventh-wrapper").offset().top;
    var ninthWrapper = $(".ninth-wrapper").offset().top;

    if (scrollY <= sixthWrapper) {
      homeTag.addClass('Select-tag').removeClass('tag');
    }
    if (scrollY > sixthWrapper && scrollY <= seventhWrapper) {
      homeTag.addClass('tag').removeClass('Select-tag'), accessTag.addClass('Select-tag').removeClass('tag');
    } else {
      accessTag.addClass('tag').removeClass('Select-tag');
    }
    if (scrollY > seventhWrapper && scrollY <= ninthWrapper) {
      accessTag.addClass('tag').removeClass('Select-tag'), reservationTag.addClass('Select-tag').removeClass('tag');
    } else {
      reservationTag.addClass('tag').removeClass('Select-tag');
    }
    if (scrollY > ninthWrapper) {
      reservationTag.addClass('tag').removeClass('Select-tag'), recruitTag.addClass('Select-tag').removeClass('tag');
    } else {
      recruitTag.addClass('tag').removeClass('Select-tag');
    }
  });
});
