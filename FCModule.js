//helloworld.js:

Module.register("FCModule",{
	// Default module config.
	defaults: {
		text: "FC!"
	},


	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.id = 'FC'
		wrapper.innerHTML = this.config.text;


		return wrapper;
	},

	start: function() {
	const evtSource = new EventSource("http://localhost:3000/test");
		evtSource.addEventListener('message', message => {
		
		console.log("got", message)
		var node = document.createElement('P')
		var text = document.createTextNode(JSON.parse(message.data))
		node.appendChild(text)
		var x = document.getElementById('FC')
		x.appendChild(node)


		});
		
	
},

  notificationReceived: function() {},
  socketNotificationReceived: function() {}

});