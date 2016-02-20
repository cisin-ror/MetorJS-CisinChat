Template.dashboard.events({
  "submit .new-message": function (event) {
    event.preventDefault();
    var text = event.target.message.value;
    if (text != '') {
    	message = { body: text, author: Meteor.user().username }
    	Meteor.call("save_messsage",message,function(error,result){
    		if(error){
    			console.log("error",error);
    		}else{
    			console.log("success");
    		}
    	});
    }       
    event.target.message.value = "";
  }
});

Template.dashboard.helpers({
  messages: function () {
    return Messages.find().fetch();
  },
  usersList: function () {
    return Meteor.users.find().fetch();
  }
});


// Template.dashboard.rendered = function () {
// 	$('.chat-box').scrollTop( $('.chat-box').prop("scrollHeight"),'slow');
//   	window.setInterval(function() {
//   		$('.chat-box').scrollTop( $('.chat-box').prop("scrollHeight"),'slow');
// 	}, 3000);
// };

