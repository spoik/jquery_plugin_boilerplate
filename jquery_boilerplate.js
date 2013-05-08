/*
 * jQuery plugin that 
 *
 * Date: 
 * Author: 
 * Written for jQuery Version: 
 */

(function( $ ){
	var public_methods = {
		// Constructor
		init : function( options ) {
			return this.each(function(){
				var $this = $(this),

					// Change myPlugin to the name of your plugin
					data = $this.data('myPlugin');

				// If the plugin hasn't been initialized yet
				if ( ! data ) {
					// Merge default settings with user settings
					var settings = $.extend(true, {
						setting: 'setting value'
					}, options);

					// Change myPlugin to the name of your plugin
					$this.data('myPlugin', settings);
				}

                // Call a private method
                private_methods.private_method.call($this);
			});
		},

		// Deconstructor
		destroy : function( ) {
			return this.each(function(){

				var $this = $(this);

				// Change myPlugin to the name of your plugin

				// Remove any events bound to elements for this plugin
				// $(element(s)).unbind('.myPlugin');
				$this.removeData('myPlugin');

			});
		}
	};

	// Private methods
    var private_methods = {
        private_method: function() {}
    };

	// Change myPlugin to the name of your plugin
	$.fn.myPlugin = function( method ) {
		if ( public_methods[method] ) {
			return public_methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return public_methods.init.apply( this, arguments );
		} else {
			// Change myPlugin to the name of your plugin
			$.error( 'Method ' +  method + ' does not exist on jQuery.myPlugin' );
		}
	};
})( jQuery );
