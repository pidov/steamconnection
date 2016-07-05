console.log("Application start!")

var app = new Vue({
	el: '#app',
	data: {
		title: "Hello world"
	},
	created: function() {
		console.log("Application initialized")
	}
})
