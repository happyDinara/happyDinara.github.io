//tabs
$(function() {
  
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });

  //slider
  var slider = tns({
    container: '.my-slider',
    items: 2,
    slideBy: '.5',
    autoplay: true,
    gutter: 5,
    controls: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 2000,
  });