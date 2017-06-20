import { About } from "../about/about.js";
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'about.insert'(text) {
    check(text, String);
    return Links.insert({
      text,
      createdAt: new Date(),
    });
  },
});
