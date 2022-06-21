import { Meteor } from 'meteor/meteor';
import { generateMessage } from '../imports/api/messages/MessageGenerator';
import { MessagesCollection } from "/imports/api/messages/MessagesCollection"

const insertMessage = (message) => MessagesCollection.insert({ ...message });

Meteor.startup(() => {
  if (MessagesCollection.find().count() === 0) {
    [
      ...new Array(5)
    ].map(() => generateMessage()).forEach(insertMessage);
  }
});
