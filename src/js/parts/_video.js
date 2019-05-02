// Видео
(function($) {
	var videoWrapper = $('#video-block'),
		videoItem = $('#video');

	videoWrapper.on('click', function() {
		if (videoItem.prop('paused')) {
			videoItem[0].play();
			videoWrapper.removeClass('paused');
		} else {
			videoItem[0].pause();
			videoWrapper.addClass('paused');
		};
	})
}(jQuery));