// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Projects } from "../../api/projects/projects.js";

Meteor.startup(() => 
{
    // Projects.insert({name:"This Website",description:"This website is open source and I guess is apart of my portfolio",link:"http://www.github.com"});
    // Projects.insert({name:"Project 5",description:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod elit eu dignissim fermentum. Suspendisse vitae varius lorem. Fusce ut efficitur odio",link:"http://www.github.com"});
    // Projects.insert({name:"Math maker 5000",description:"Duis pretium rutrum justo, sed iaculis arcu volutpat eget.",link:"http://www.github.com"});
    // Projects.insert({name:"Generic App Name",description:"h. Vestibulum id turpis elementum, euismod odio non, suscipit lorem. Duis pellentesque",link:"http://www.github.com"});
    // Projects.insert({name:"Dang Of War",description:"ismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sem ullamcorper, auctor urna id",link:"http://www.github.com"});
    // Projects.insert({name:"dooter 3",description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",link:"http://www.github.com"});
});
