/*! angular-leaflet-directive-ext Version: 0.2.3 */
angular.module('leaflet-directive.ext.d3.hexbin', ['leaflet-directive']).config(function($provide){
	"use strict";

	$provide.decorator('leafletDirective', function($delegate){
		// Just adding the scope variable called 'hexbin'
		$delegate[0].scope.hexbin = "=";
		return $delegate;
	});
});
angular.module("leaflet-directive.ext.d3.hexbin").directive('hexbin', function() {
	"use strict";

	return {
		restrict : "A",
		scope : false,
		replace : false,
		require : 'leaflet',
		link : function(scope, element, attrs, controller) {

			controller.getMap().then(function(map) {
				// Initialize the hexbin layer
				var hexLayer = L.hexbinLayer(scope.hexbin.config).addTo(map);
				var temp = scope.hexbin;

				// Watch the hexbin scope variable
				scope.$watch('hexbin.data', function(){
					hexLayer.data(scope.hexbin.data);
				});

				hexLayer.data(scope.hexbin.data);
			});
		}
	};
});

angular.module('leaflet-directive.ext.d3.ping', ['leaflet-directive']).config(function($provide){
	"use strict";

	$provide.decorator('leafletDirective', function($delegate){
		// Just adding the scope variable called 'hexbin'
		$delegate[0].scope.ping = "=";
		return $delegate;
	});
});
angular.module("leaflet-directive.ext.d3.ping").directive('ping', function() {
	"use strict";

	return {
		restrict : "A",
		scope : false,
		replace : false,
		require : 'leaflet',
		link : function(scope, element, attrs, controller) {

			controller.getMap().then(function(map) {
				// Initialize the ping layer
				var pingLayer = L.pingLayer(scope.ping.config).addTo(map);
				scope.$on(scope.ping.event, function(event, pingData){
					pingLayer.ping(pingData);
				});
			});

		}
	};
});
