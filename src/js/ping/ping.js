angular.module("leaflet-directive.ext.d3.ping").directive('ping', function() {
	"use strict";

	return {
		restrict : "A",
		scope : false,
		replace : false,
		require : 'leaflet',
		link : function(scope, element, attrs, controller) {
			// Get the leaflet scope, so we can access the hexbin variable
			var leafletScope  = controller.getLeafletScope();

			controller.getMap().then(function(map) {
				// Initialize the ping layer
				var pingLayer = L.pingLayer(leafletScope.ping.config).addTo(map);
				scope.$on(leafletScope.ping.event, function(event, pingData){
					pingLayer.ping(pingData);
				});
			});
		}
	};
});
