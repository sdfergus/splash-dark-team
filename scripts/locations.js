var $locationsLink = $('.dropdown a'); 

$locationsLink.click(function() {
    $(this).toggleClass('highlight');
    console.log('WAS CLICKED!');
 });