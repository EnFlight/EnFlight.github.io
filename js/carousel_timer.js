$(function() {
  var demo1 = $(".demo-1").slippry({
    transition: 'fade',
    useCSS: true,
    speed: 1000,
    pause: 3000,
    auto: true,
    preload: 'visible'
  });
  $('.stop').click(function () {
    demo1.stopAuto();
  });
  $('.start').click(function () {
    demo1.startAuto();
  });
  $('.reload').click(function () {
    demo1.reloadSlider();
    return false;
  });
  $('.init').click(function () {
    demo1 = $(".demo-1").slippry();
    return false;
  });
});