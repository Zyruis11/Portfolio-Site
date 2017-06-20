import "./editAboutMe.html";
import { About } from "../../../../api/about/about.js";

Template.ui_components_editAboutMe.onCreated(function(){
    Meteor.subscribe("about.all");
});

Template.ui_components_editAboutMe.events({
    'submit .editAbout'(event){
        event.preventDefault();
        var aboutText = event.target.about_text.value;
        var about = About.findOne({},{sort:{createdAt:-1,limit:1}})
        About.update(
            { _id: about._id}, 
            { $set: { text: aboutText, createdAt: new Date()}
        });

        Materialize.toast('About Text Edited', 4000)
    }
});