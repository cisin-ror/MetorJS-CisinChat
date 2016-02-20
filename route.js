Router.configure({
  // the default layout
  layoutTemplate: 'header'
});

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
	    if (!Meteor.user() && !Meteor.loggingIn()) {       
	       	this.redirect('login');
	        this.stop();
	    }
      else{
        	this.next();
    	}
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: ['register' ,'login', 'home']
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/login', function () {
  this.render('login');
});

// Accounts.onLogin(function () {
//     Router.go('dashboard');
// });

Router.route('/dashboard', {
    name: 'dashboard',
    template: 'dashboard',
    subscriptions: function(){
      return [Meteor.subscribe("onlineUserList"),Meteor.subscribe('messages')];
    }
});
