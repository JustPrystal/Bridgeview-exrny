function validatePhoneNumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}

jQuery(document).ready(function($) {
    jQuery('#input_phone').on('input', function() {
        var input = $(this).val();
        var cleaned = input.replace(/\D/g, '');
        // Apply the format XXX-XXX-XXXX
        var formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        if (formatted.length > 12) {
        formatted = formatted.substring(0, 12);
        }
        jQuery(this).val(formatted);
    });
})

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".links-wrap").stop().slideToggle()
    })
    $(window).resize(function () {
        if ($(this).innerWidth() > 767) {
            $(".links-wrap").css("display", "block")
        } else {
            $(".links-wrap").css("display", "none")
        }
    })
})