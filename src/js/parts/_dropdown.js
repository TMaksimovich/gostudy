// dropdown-menu
(function() {
    $('.dropdown-menu').on("click", function(event){
    	$('.dropdown-menu-list').removeClass('open');
    	$('html').one('click',function() {
	      $('.dropdown-menu-list').removeClass("open");
	    });
        $(this).find('.dropdown-menu-list').toggleClass('open');
        event.stopPropagation();
    });
}());
// end dropdown-menu