jQuery('a[data-popup]').on('click', function(e) {
    var selector = jQuery(this).data('popup');
    var popup = jQuery(selector);

    if (popup.length) {
       popup.addClass('popup-active');
    }
});

jQuery('.popup-close').on('click', function(e) {
    jQuery('.popup').removeClass('popup-active');
});