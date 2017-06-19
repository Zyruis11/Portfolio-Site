import "./editProject.html";
import { Projects } from "../../../../api/projects/projects.js";

Template.ui_components_editProject.onCreated(function () {
    Meteor.subscribe("projects.all");
});

Template.ui_components_editProject.helpers({
    'projectName':function(){
        return Session.get('projName'); 
    },
    'projectDesc':function(){
        return Session.get('projDesc');
    },
    'projectLink':function(){
        return Session.get('projLink');
    }
});

Template.ui_components_editProject.events({
    'submit .editProject'(event){
        event.preventDefault();
        var projName = event.target.project_name.value; 
        var projLink = event.target.project_url.value; 
        var projDesc = event.target.project_description.value;
        Projects.update({_id:Session.get('editID')},{$set:{name:projName,description:projDesc,link:projLink}});
        Materialize.toast('Project Edited', 4000)
        $('#editProject').closeModal();
    },
});