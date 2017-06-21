import "./projectsDisplay.html";
import { Projects } from "../../../api/projects/projects.js";

Template.ui_components_projectsDisplay.helpers({
    'getProjects': function () {
        return Projects.find().fetch();
    }
});

Template.ui_components_projectsDisplay.events({
    //Expands/Collaspes all projects and changes the icon of the Fixed floating action button
    'click #expandProjects'(event) {
        if (!$(".collapsible-header").hasClass("active")) {
            $(".collapsible-header").addClass("active red lighten-1");
            $(".headerIcon").addClass("white-text");
            $(".collapsible").collapsible({ accordion: false });
            $("#expandIcon").html('<i id="expandIcon" class="material-icons left">fullscreen_exit</i>');
        } else {
            $("#expandIcon").html('<i id="expandIcon" class="material-icons left">fullscreen</i>');
            $(".collapsible-header").removeClass("active red lighten-1");
            $(".headerIcon").removeClass("white-text");
            $(".headerIcon").addClass("red-text");
            
            $(".collapsible").collapsible({ accordion: true });
            $(".collapsible").collapsible({ accordion: false });
        }
    },
    //Event for controller the colour of the headers of projects
    'click .collapsible-header'(event) {
        var headerID = event.target.id;
        if($("#" + headerID).hasClass("active")){
            $("#" + headerID).addClass("red lighten-1");
            $("#"+headerID+"iconText").addClass("white-text");
        }
        else if(!$("#" + headerID).hasClass("active")){
            $("#" + headerID).removeClass("red lighten-1");
            $("#"+headerID+"iconText").removeClass("white-text");
            $("#"+headerID+"iconText").addClass("red-text");
        }
    }
});

