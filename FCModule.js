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
	this.mySpecialProperty = "So much wow!";
	Log.log(this.name + ' is started!');

	const evtSource = new EventSource("192.168.86.248:3000/test")
		evtSource.onmessage = function(e){
		Log.log(e.data)
		var node = document.createElement('SPAN')
		var text = document.createTextNode(JSON.parse(e.data).timestamp)
		node.appendChild(text)
		var x = document.getElementById('FC')
		x.appendChild(node)
		}
	
},

  notificationReceived: function() {},
  socketNotificationReceived: function() {},

});