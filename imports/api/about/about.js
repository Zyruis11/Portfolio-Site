import { Mongo } from 'meteor/mongo';
export const About = new Mongo.Collection('about');

About.schema = new SimpleSchema({
    text: {
        type: String
    },
    createdAt:  {
        type: Date
    },
});

About.attachSchema(About.schema);

About.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});