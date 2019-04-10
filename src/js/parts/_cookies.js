// Плашка cookies
(function($) {
	if ($(document).height() > $(window).height()) {
    	$('body').on('load scroll', function() {
	    	checkOffset();
		});
	} else {
		$('#fixed-box').css({position: 'absolute', bottom: 105});
	}

	function checkOffset() {
	  if($('#fixed-box').offset().top + $('#fixed-box').height() >= $('#footer').offset().top - 48)
	  {
	    $('#fixed-box').css({position: 'absolute', bottom: 105});
	  } else {
	    $('#fixed-box').css('position', 'fixed');
	    $('#fixed-box').offset({ bottom: $("body").scrollTop() });
	  }
	}


	$('.cookies-block-dismiss').on("click", function(event){
		$('#fixed-box').fadeOut('fast');
	        event.stopPropagation();
	});


}(jQuery));
