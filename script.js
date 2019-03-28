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
  });
});
