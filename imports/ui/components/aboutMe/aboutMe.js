import './aboutMe.html';
import {About} from "../../../api/about/about.js";


Template.ui_components_aboutMe.onCreated(function(){
    Meteor.subscribe("about.all");
});

Template.ui_components_aboutMe.helpers({
    'aboutText':function(){
        var about = About.findOne({},{sort:{createdAt:-1,limit:1}})
        return about.text;
    }
});