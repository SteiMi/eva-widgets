define(['jquery'], function($) {

	/**
 	 * This widget shows the string "Hello <name>!". Where <name> is set via the config.
 	 */
	function Widget(selector, config) {
		
		// save selector for later reference
		this.selector = selector;
		
		// set name to print from config or use default
		if (config && config.name) {
			this.name = config.name;
		} else {
			this.name = "Config"
		}
		
		// render content
		this.renderHelloName();
	}

	/**
	 * Custom function to draw the "Hello <name>!" string.
         */	
	Widget.prototype.renderHelloName = function() {
		$(this.selector).html('Hello ' + this.name + '!');
	}
	
	Widget.prototype.getConfig = function() { 
		return { name: this.name }; 
	}
	
	Widget.prototype.renderConfigDialog = function(selector, callback) {
		var self = this
		$(selector).html(
			'<div class="helloname">Name: <input type="text"/><button>Save!</button></div>');
		$(selector).find('button').on('click', function() {
			self.name = $("input", selector).val();
			self.renderHelloName();
			callback();
		});
	};
	
	/*
	 * These are some required life cycle functions. 
	 * We don't need to implement anything more sophisticated for this simple widget.
	 * Other tutorials go into more detail.
	 */
	Widget.prototype.redraw = function() {};
	Widget.prototype.destroy = function() {};
	
	// return our widget
	return Widget;

});
