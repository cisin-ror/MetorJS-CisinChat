Meteor.methods({
    'save_messsage': function(message){
        Messages.insert(message,function(error, result){
        	
        });
        return true;
    }
});