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

