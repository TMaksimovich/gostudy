// Модальные окна
(function($) {
  $('.header-links-popap, .form-link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    showCloseBtn: false,

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      },
    }
  });
}(jQuery));