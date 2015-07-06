/*! angular-leaflet-directive-ext Version: 0.3.4 */
angular.module('leaflet-directive.ext.d3.hexbin', ['leaflet-directive']).config([ '$provide', function($provide){
	'use strict';

	$provide.decorator('leafletDirective', [ '$delegate', function($delegate){
		// Just adding the scope variable called 'hexbin'
		$delegate[0].$$isolateBindings.hexbin = {
			attrName: 'hexbin',
			mode: '=',
			optional: true
		};

		return $delegate;
	}]);
}]);
angular.module('leaflet-directive.ext.d3.hexbin').directive('hexbin', function() {
	'use strict';

	return {
		restrict : 'A',
		scope : false,
		replace : false,
		require : 'leaflet',
		link : function(scope, element, attrs, controller) {

			// Get the leaflet scope from the parent leaflet controller
			var leafletScope = controller.getLeafletScope();

			controller.getMap().then(function(map) {
				// Initialize the hexbin layer
				var hexLayer = L.hexbinLayer(leafletScope.hexbin.config).addTo(map);
				var temp = leafletScope.hexbin;

				// Watch the hexbin scope variable
				leafletScope.$watchCollection('hexbin.data', function(){
					hexLayer.data(leafletScope.hexbin.data);
				});

				hexLayer.data(leafletScope.hexbin.data);
			});

		}
	};
});

angular.module('leaflet-directive.ext.d3.ping', ['leaflet-directive']).config([ '$provide', function($provide){
	'use strict';

	$provide.decorator('leafletDirective', [ '$delegate', function($delegate){
		// Just adding the scope variable called 'ping'
		$delegate[0].$$isolateBindings.ping = {
			attrName: 'ping',
			mode: '=',
			optional: true
		};

		return $delegate;
	}]);
}]);
angular.module('leaflet-directive.ext.d3.ping').directive('ping', function() {
	'use strict';

	return {
		restrict : 'A',
		scope : false,
		replace : false,
		require : 'leaflet',
		link : function(scope, element, attrs, controller) {

			// Get the leaflet scope from the parent leaflet controller
			var leafletScope = controller.getLeafletScope();

			controller.getMap().then(function(map) {
				// Initialize the ping layer
				var pingLayer = L.pingLayer(leafletScope.ping.config).addTo(map);
				leafletScope.$on(leafletScope.ping.event, function(event, pingData){
					pingLayer.ping(pingData);
				});
			});

		}
	};
});
