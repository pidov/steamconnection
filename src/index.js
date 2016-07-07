import Vue from 'vue';
import jquery from 'jquery';
import materialize from 'materialize-css';
import AppComponent from './components/app-component'

require("!style!css!sass!../node_modules/materialize-css/sass/materialize.scss");

var app = new Vue({
	el: '#app',
	components: {
		'app-component': AppComponent
	},
	data: {
		title: "Hello world"
	},
	created: function() {
		console.log("Application initialized")
	},
	attached: function() {
		$(document).ready(function() {
    		Materialize.updateTextFields();
		})
	}
})
