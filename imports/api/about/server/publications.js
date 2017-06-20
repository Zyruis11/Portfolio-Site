// All links-related publications

import { Meteor } from 'meteor/meteor';
import { About } from '../about.js';

Meteor.publish('about.all', function () {
    return About.find();
});
