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
