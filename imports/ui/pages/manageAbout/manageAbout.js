import "./manageAbout.html";
import "../../components/forms/editAboutMe/editAboutMe.js";
import {About} from "../../../api/about/about.js";

Template.ui_pages_manageAbout.onCreated(function(){
    Meteor.subscribe("about.all");
    
});

Template.ui_pages_manageAbout.helpers({
    'getAbout':function(){
        var about = About.findOne({},{sort:{createdAt:-1,limit:1}})
        return about.text;
    }
});