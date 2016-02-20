Template.header.events({
    'click .logout': function(event){
        event.preventDefault();
        try{
        	Meteor.logout();
        	Router.go('home');
        }catch(err){
        	alert("Error::"+err.message);
        }
    }
});