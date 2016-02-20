Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        try{
	        var userVar = event.target.loginUserName.value;
	        var passwordVar = event.target.loginPassword.value;
	        Meteor.loginWithPassword(userVar, passwordVar, function(error){
			    if(error){
			    	alert("Error::"+error.reason)
			    } else {
			        Router.go("dashboard");
			    }
			});

	    }
	    catch(err){
	    	alert("Error::"+err.message);
	    }
    }
});

Template.login.onRendered(function(){
    $('.login').validate({
         rules: {
            loginUserName: {
                required: true
            },
            loginPassword: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            loginUserName: {
                required: "You must enter an user name."
            },
            loginPassword: {
                required: "You must enter a password."
            }
        }
    });
});