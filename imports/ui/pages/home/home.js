import '../../components/projectsDisplay/projectsDisplay.js';
import './home.html';
import "../../components/aboutMe/aboutMe.js";

import { Projects } from "../../../api/projects/projects.js"

Template.App_home.onCreated(function () {
    Meteor.subscribe("projects.all");

    $('.collapsible').collapsible({
        accordion: false,
    });
});

Template.App_home.onRendered(function () {
});

Template.App_home.helpers({
    'getProjects': function () {
        return Projects.find().fetch();
     
    }
});

Template.App_home.events({
    //Expands/Collaspes all projects and changes the icon of the Fixed floating action button
    'click #expandProjects'(event) {
        if (!$(".collapsible-header").hasClass("active")) {
            $(".collapsible-header").addClass("active");
            $(".collapsible").collapsible({ accordion: false });
            $("#expandIcon").html('<i id="expandIcon" class="material-icons left">fullscreen_exit</i>');
        } else {
            $("#expandIcon").html('<i id="expandIcon" class="material-icons left">fullscreen</i>');

            $(".collapsible-header").removeClass(function () {
                return "active";
            });
            $(".collapsible").collapsible({ accordion: true });
            $(".collapsible").collapsible({ accordion: false });
        }
    }
});