import Vue from 'vue';
import template from './app-component.html';

import HeaderComponent from '../header'
import FooterComponent from '../footer'

const AppComponent = Vue.extend({
  template: template,
  data: function() {
  	return {
  		username: 'loading...',
  		login: false
  	}
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  },
  ready: function() {
  	var self = this;
  	var request = require('superagent');
  	request.get("/api/user")
  		.end(function(err, res) {
  			console.log(res.body.expanded);
  			self.username = res.body.username;
  			self.login = res.body.login;
  		})

  	setTimeout(function() {
		request.get("/api/recentGames")
	  		.end(function(err, res) {
	  			console.log(res.body);
	  		})

  	}, 5000)
  }
});

export default AppComponent;
