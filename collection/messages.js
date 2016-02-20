Messages = new Meteor.Collection("Messages");
  
  	var Schemas = {};

  	Schemas.Message = new SimpleSchema({
    	_id: {
      		type: String,
      		optional: true
    	},
    	body: {
      		type: String,
      		optional: true
    	},
    	author: {
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

Messages.attachSchema(Schemas.Message);