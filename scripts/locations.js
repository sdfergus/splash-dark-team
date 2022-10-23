var $locationsLink = $('.dropdown a'); 
var $dropdownMenu = $('.dropdown');

$locationsLink.click(function(e) {
    if ($dropdownMenu.hasClass("show")) {
        $(this).removeClass('highlight');
    } else {
        mouseInside = false;
        $(this).addClass('highlight');
    }
 }).focusout(function() {
    $(this).removeClass('highlight');
 });