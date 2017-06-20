import "./admin.html";
import "../../components/navigation/sidenav/sidenav.js";
import "./admin.css";

Template.App_admin.onRendered(function () {
    $('.button-collapse').sideNav({
        menuWidth: 200, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.button-collapse').sideNav('hide'); //TODO Change this, doesn't allow the navbar to become collaspable on smaller screen sizes
})