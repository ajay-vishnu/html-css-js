$(document).ready(function(){
    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        console.log("Mouse hovered on account.");
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(200);

        $('.profile-menu').on('mouseleave',function() {
            submenu.fadeOut(200);
        });
    });

    $(document).on('contextmenu', function () {
        return false;
    });

    if ($(':contains("Lorem")').hasClass("main")) {
        console.log("Lorem belongs");
    }

    function printThis(el) {
        console.log($(this).text());
    }
    
    $('p').each(printThis);
    
    $('input').focusout(function(){
        if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1){
            $(".status").html("Valid Email");
        } else {
            $(".status").html("Invalid Email. Please try again");
        }
    });
});