// mobile-menu
(function() {
    $('#toggle-menu, .sidebar-menu-trigger').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu-list, .sidebar-menu-child').toggleClass('show');
    });
}());
// end mobile-menu