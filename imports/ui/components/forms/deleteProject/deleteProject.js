import "./deleteProject.html";
import { Projects } from "../../../../api/projects/projects.js";

Template.ui_components_deleteProject.onCreated(function () {
    Meteor.subscribe("projects.all");
});

Template.ui_components_deleteProject.helpers({
    'projectName': function () {
        return Session.get('projName');
    },
});

Template.ui_components_deleteProject.events({
    'click #deleteProj'(event) {
        event.preventDefault();
        Projects.remove({ _id: Session.get('deleteID') });
        $('#deleteProject').closeModal();
        Materialize.toast('Project Deleted', 4000)
    },
    'click #cancelProj'(event) {
        event.preventDefault();
        $('#deleteProject').closeModal();
    }
});