/**
 * Created by Александр on 01.05.2016.
 */
$(document).ready(function() {
    $('ul.tabs').each(function() {
        $(this).find('li').each(function(i) {
            $(this).click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                var p = $(this).parents('div.tabs_container');
                p.find('div.tab_container').hide();
                p.find('div.tab_container:eq(' + i + ')').show();
            });
        });
    });
});



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
