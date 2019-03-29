// Добавление в избранное
(function($) {
  $(".vacancy-favorite-link").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("vacancy-favorite-link--active");
  });
}(jQuery));