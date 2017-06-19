import "./manageProjects.html";
import { Projects } from "../../../api/projects/projects.js";

Template.ui_components_manageProjects.onCreated(function () {
    Meteor.subscribe("projects.all");
});

Template.ui_components_manageProjects.helpers({
    'getProjects' :function(){
        return Projects.find().fetch();
    }
});

//Sets the session var for to the ID of the project 
Template.ui_components_manageProjectsLine.events({
    'click #editProject'(event){
        event.preventDefault();
        var proj = Projects.find({_id:this._id}).fetch();
        Session.set('editID',this._id);
        Session.set('projName',proj[0].name);
        Session.set('projDesc',proj[0].description);
        Session.set('projLink',proj[0].link);
        $('#editProject').openModal();
    },
    'click #deleteProject'(event){
        event.preventDefault();
        console.log(this._id);
        var proj = Projects.find({_id:this._id}).fetch();
        Session.set('deleteID',this._id);
        Session.set('projName',proj[0].name);
        $('#deleteProject').openModal(); 
    }
});