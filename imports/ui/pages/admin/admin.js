import "./admin.html";
import "../../components/forms/createProject/createProject.js";
import "../../components/modal/modal.js";
import "../../components/manageProjects/manageProjects.js";
import "../../components/forms/deleteProject/deleteProject.js";

Template.ui_pages_admin.events({
    'click #createProjBtn'(event){
        $('#createProject').openModal();
    }
});