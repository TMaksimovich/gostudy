// Добавление в избранное
(function($) {
  $(".card-favorite-link").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("card-favorite-link--active");
  });
}(jQuery));