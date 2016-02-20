Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    try{
    	var userVar = event.target.registerUserName.value;
	    var emailVar = event.target.registerEmail.value;
	    var passwordVar = event.target.registerPassword.value;
	    Accounts.createUser({
	    	username: userVar,
		    email: emailVar,
		    password: passwordVar
			}, function(error){
		    if(error){
		    	alert("Error::"+error.reason);
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


Template.register.onRendered(function(){
    $('.register').validate({
         rules: {
         	registerUserName: {
         		required: true
         	},
            registerEmail: {
                required: true,
                email: true
            },
            registerPassword: {
                required: true,
                minlength: 8
            }
        },
        messages: {
        	registerUserName: {
         		required: "You must enter an user name."
         	},
            registerEmail: {
                required: "You must enter an email address.",
                email: "You've entered an invalid email address."
            },
            registerPassword: {
                required: "You must enter a password.",
                minlength: "Your password must be at least {0} characters."
            }
        }
    });
});

