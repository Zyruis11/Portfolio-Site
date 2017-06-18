import "./editProject.html";
import { Projects } from "../../../../api/projects/projects.js";

Template.ui_components_editProject.onCreated(function () {

});
//TODO 
// //Create new project
// Template.ui_components_editProject.events({
//     'submit .createProject'(event){
//         event.preventDefault();
//         var projName = event.target.project_name.value; 
//         var projLink = event.target.project_url.value; 
//         var projDesc = event.target.project_description.value;
//         Projects.update({name:projName,description:projDesc,link:projLink});
//         Materialize.toast('Success', 4000)
//     },
// });