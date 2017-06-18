import "./modal.html";
import "../../components/forms/createProject/createProject.js";

Template.ui_components_modal.onCreated(function () {
});

Template.ui_components_modal.helpers({
    getTemplate:function(){
        return Template.instance().data.templateName;
    }
});