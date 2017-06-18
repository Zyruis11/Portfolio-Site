import "./manageProjects.html";
import { Projects } from "../../../api/projects/projects.js";

Template.ui_components_manageProjects.onCreated(function () {
    Meteor.subscribe("projects.all");
});

Template.ui_components_manageProjects.helpers({
    'getProjects' :function(){
        console.log( Projects.find().fetch());
        return Projects.find().fetch();
    }
});

Template.ui_components_manageProjectsLine.events({
    'click #editProject'(event){
        event.preventDefault();
        Session.set('editID',this._id);
    }
});