import '../../components/projectsDisplay/projectsDisplay.js';
import './home.html';
import "../../components/projectsCard/projectsCard.js";
import "../../components/aboutMe/aboutMe.js";

import {Projects} from "../../../api/projects/projects.js"

Template.App_home.onCreated(function () {
    Meteor.subscribe("projects.all");
});

  $('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });


Template.App_home.helpers({
    'getProjects' :function(){
        return Projects.find().fetch();
    }
});