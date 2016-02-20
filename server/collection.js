Meteor.publish('messages', function() {
  return Messages.find();
});

Meteor.publish("onlineUserList", function () {
  return Meteor.users.find({"status.online": true },  {fields: {username: 1}});
});