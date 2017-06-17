import "./sidenav.html";

Template.ui_components_sidenav.onRendered(function(){
    $(".button-collapse").sideNav();
    $('.button-collapse').sideNav('show');
});