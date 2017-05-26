// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Projects } from '../projects.js';

Meteor.publish('projects.all', function () {
  return Projects.find();
});
