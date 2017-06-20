import "./createProject.html";
import { Projects } from "../../../../api/projects/projects.js";
//Create new project
Template.ui_components_forms_createProject.events({
    'submit .createProject'(event) {
        event.preventDefault();
        var projName = event.target.project_name.value;
        var projLink = event.target.project_url.value;
        var projDesc = event.target.project_description.value;
        Projects.insert({ name: projName, description: projDesc, link: projLink });
        Materialize.toast('Project Created', 4000);
        $('#createProject').closeModal();
    },
});