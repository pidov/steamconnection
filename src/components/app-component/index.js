import Vue from 'vue';
import template from './app-component.html';

import HeaderComponent from '../header'
import FooterComponent from '../footer'

const AppComponent = Vue.extend({
  template: template,
  data: function() {
  	return {
  		user: 'loading...',
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
  	var request = require('superagent');
  	request.get("/api/user")
		.end(function(err, res) {
			this.user = res.body.user;
			this.login = res.body.login;
		}.bind(this))
	},
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  }
});

export default AppComponent;
