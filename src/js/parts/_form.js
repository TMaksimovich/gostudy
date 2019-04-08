// Select
(function($) {
  $(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<ul class="custom-options">';
        $(this).find("option").each(function() {
          template += '<li class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</li>';
        });
    template += '</ul></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function(event) {
  	$(".custom-select").removeClass("opened");
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select--text").find(".custom-select-trigger").text($(this).text());
  });
}(jQuery));
// end Select

// custom input type file
(function($) {
  var fileInput  = $(".file-field"),
      button     = $(".file-field-label"),
      the_return = $(".file-return");

  button.on( "keydown", function( event ) {
      if ( event.which == 13 || event.which == 32 ) {
          fileInput.focus();
      }
  });
  button.on( "click", function( event ) {
     fileInput.focus();
     return false;
  });
  fileInput.on( "change", function( event ) {
      the_return.html(this.value);
  });
}(jQuery));
// end custom input type file

// search-form
(function() {
    $('.search-toggle').click(function(){
        $(this).toggleClass('active');
        $('.search-form').fadeIn(100);
        $(this).fadeOut(100);
    });
}());
// end search-form