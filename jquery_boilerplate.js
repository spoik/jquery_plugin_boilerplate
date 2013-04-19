(function( $ ){
	var methods = {
		// Constructor
		init : function( options ) {
			return this.each(function(){
				var $this = $(this),
					data = $this.data('myPlugin');

				// If the plugin hasn't been initialized yet
				if ( ! data ) {
					/*
						Do more setup stuff here
					*/

					$(this).data('myPlugin', {
						target: $this,
					});
				}
			});
		},

		// Deconstructor
		destroy : function( ) {
			return this.each(function(){

				var $this = $(this),
					data = $this.data('myPlugin');

				// $(element(s)).unbind('.myPlugin');
				$this.removeData('myPlugin');

			});
		},
	};

	$.fn.myPlugin = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.myPlugin' );
		}
	};
})( jQuery );