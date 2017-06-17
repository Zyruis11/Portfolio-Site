import "./projectsDisplay.html";
import "../projectsLine/projectsLine.js";
import { Projects } from "../../../api/projects/projects.js";

Template.ui_components_projectsDisplay.helpers({
    'getProjects' :function(){
        return Projects.find().fetch();
    }
});