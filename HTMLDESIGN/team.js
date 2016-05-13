(function($) {
    $(function() {
      $('ul.tabs').delegate('li:not(.current)', 'click', function() {
        $(this).addClass('current').siblings().removeClass('current')
        .parents('div.tabs-block').find('div.tab-item').hide().eq($(this).index()).fadeIn();
        $(this).parent().parent().find('.ctr-slider').slick('setPosition');
        return false;
      })
    })
  })(jQuery)
  