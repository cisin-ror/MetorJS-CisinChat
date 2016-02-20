Rooms = new Meteor.Collection("rooms");
  
  	var Schemas = {};

  	Schemas.Room = new SimpleSchema({
    	_id: {
      		type: String,
      		optional: true
    	},
    	name: {
      		type: String,
      		optional: true
    	},
    	creator: {
      		type: String,
      		optional: true
    	},
    	createdAt: {
	      	type: Date,
	      	autoValue: function() {
	      		return new Date();
	      	}
	    }
  	});

Rooms.attachSchema(Schemas.Room);