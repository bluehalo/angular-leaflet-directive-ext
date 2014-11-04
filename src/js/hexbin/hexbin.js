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
