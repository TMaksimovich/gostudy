// mobile-menu
(function() {
    $('#toggle-menu, .sidebar-menu-trigger').click(function(){
        $(this).toggleClass('active');
        $(this).closest('.sidebar-item').find('.sidebar-menu-child').toggleClass('show');
        $('.mobile-menu-list').toggleClass('show');
    });
}());
// end mobile-menu