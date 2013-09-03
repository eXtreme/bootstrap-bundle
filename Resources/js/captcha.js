/**
 * This file is part of ExBootstrapBundle.
 *
 * (c) 2013 by Jacek Jędrzejewski
 */

$(function () {
    $(document).on('click', '.captcha_widget .captcha_reload', function (ev) {
        var $this = $(this);
        var $widget = $this.closest('.captcha_widget');

        var img = $widget.find('img');
        img.attr('src', img.attr('src')+'?n='+(new Date()).getTime());
    });
});