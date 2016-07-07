import Vue from 'vue';
import template from './header.html';
import $ from 'jquery'

const HeaderComponent = Vue.extend({
  template: template,
  data: function() {
  	return {
  		login: false,
  		username: '',
  		topLevelNav: [{
	  		name: 'Home',
	  		url: '/home'
	  	}, {
	  		name: 'Contacts',
	  		url: '/contacts'
	  	}]
  	}
  },
  ready: function() {
  	var self = this;
  	var request = require('superagent');
  	request.get("/api/user")
  		.end(function(err, res) {
  			self.username = res.body.username;
  			self.login = res.body.login;
  			console.log(res.body);
  		})

  }
});

export default HeaderComponent;
