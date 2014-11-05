angular.module("leaflet-directive.ext.d3.hexbin").directive('hexbin', function() {
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
				// Initialize the hexbin layer
				var hexLayer = L.hexbinLayer(leafletScope.hexbin.config).addTo(map);
				var temp = leafletScope.hexbin;

				// Watch the hexbin scope variable
				leafletScope.$watch('hexbin.data', function(){
					hexLayer.data(leafletScope.hexbin.data);
				});

				hexLayer.data(leafletScope.hexbin.data);
			});

		}
	};
});
