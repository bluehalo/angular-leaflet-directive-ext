angular.module("leaflet-directive.ext.d3.ping").directive('ping', function() {
	"use strict";

	return {
		restrict : "A",
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
