import "./modal.html";
import "../../components/forms/createProject/createProject.js";
import "../../components/forms/editProject/editProject.js";

Template.ui_components_modal.helpers({
    getTemplate: function () {
        return Template.instance().data.templateName;
    }
});