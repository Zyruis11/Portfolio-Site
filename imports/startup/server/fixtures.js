// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Projects } from "../../api/projects/projects.js";
import {About} from "../../api/about/about.js";
Meteor.startup(() => 
{
    if(Projects.find().count() <= 0){
        Projects.insert({name:"This Website",description:"This website is open source and I guess is apart of my portfolio",link:"http://www.github.com"});
    }
    About.insert({text:"dank",createdAt:new Date()});
});
