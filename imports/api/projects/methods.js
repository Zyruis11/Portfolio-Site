// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Projects } from './projects.js';

export const projectsCreate = new ValidatedMethod({
  name:"projects.create", 
  validate: new SimpleSchema({
        name: {
            type: String,
            custom: function(){
                if(this.value == null){
                    return "null name";
                }
            }
        },
        description: {
            type: String,
            custom: function(){
                if(this.value == null){
                    return "null description";
                }
            }
        },
        link: {
            type: String,
            custom: function(){
                if(this.value == null){
                    return "null link";
                }
            }
        }

    }).validator(),
    run: ({name,description,link})=>{
      return Projects.insert({name:name,description:description,link:link});
    }
});