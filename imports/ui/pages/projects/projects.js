import "./projects.html";
import "../../components/projectsCard/projectsCard";
import {Projects} from "../../../api/projects/projects.js"

Template.ui_pages_projects.onCreated(function () {
    Meteor.subscribe("projects.all");
});

Template.ui_pages_projects.helpers({
    'getProjects' :function(){
        return Projects.find().fetch();
    }
});