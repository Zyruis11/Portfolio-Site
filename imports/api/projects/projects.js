// Definition of the links collection

import { Mongo } from 'meteor/mongo';
export const Projects = new Mongo.Collection('projects');

Projects.schema = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    link: {
        type: String
    },
});

Projects.attachSchema(Projects.schema);

Projects.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});
