import Vue from 'vue';
import template from './app-component.html';

import HeaderComponent from '../header'
import FooterComponent from '../footer'

const AppComponent = Vue.extend({
  template: template,
  data: function() {
  	return {
  		username: 'loading...',
  		login: false,
  		topLevelNav: [{
	  		name: 'Home',
	  		url: '/'
	  	}, {
	  		name: 'Login',
	  		url: '/login'
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
		})
	},
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  }
});

export default AppComponent;
