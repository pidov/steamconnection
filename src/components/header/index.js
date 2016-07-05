import Vue from 'vue';
import template from './header.html';
import $ from 'jquery'

const HeaderComponent = Vue.extend({
  data: function() {
  	return {
  		topLevelNav: [{
	  		name: 'Home',
	  		url: '/home'
	  	}, {
	  		name: 'Contacts',
	  		url: '/contacts'
	  	}]
  	}
  },
  template: template
  // the above is ES6 shorthand for:
  // template: template
});

export default HeaderComponent;
