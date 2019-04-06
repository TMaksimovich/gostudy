// mobile-menu
(function() {
    $('#toggle-menu').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu-list').toggleClass('show');
    });
}());
// end mobile-menu