/*
 * We are extending the controls directive of leaflet-directive in order to add initialization of the 
 * filter component as part of the controls directive
 */
angular.module('leaflet-directive.ext.filter', ['leaflet-directive']).config([ '$provide', function($provide){
	"use strict";

	$provide.decorator('controlsDirective', [ '$delegate', '$timeout', 'leafletHelpers', function($delegate, $timeout, leafletHelpers){
		// Grab a reference to the directive
		var directive = $delegate[0];

		// Grab a reference to the link function
		var link = directive.link;

		// Implement a custom compile function that alters the link function
		directive.compile = function(){
			return function(scope, element, attrs, controller) {
				// Apply the original directive's link function
				link.apply(this, arguments);

				// Initialize the filter
				if(!controller) {
					return;
				}

				var isDefined = leafletHelpers.isDefined,
				leafletScope  = controller.getLeafletScope(),
				controls = leafletScope.controls;

				// Get the map
				controller.getMap().then(function(map) {
					// If the filter leaflet plugin is loaded and the filter config exists, then add it
					if (null != L && null != L.Control && isDefined(L.Control.Filter) && null != controls && isDefined(controls.filter)) {

						// Initialize the Filter Control
						var filterFeature = new L.FeatureGroup();
						var filterOptions = {
							position: 'topright',
							filter: { rectangle: {} },
							filterGroup: filterFeature
						};
						angular.extend(filterOptions, controls.filter);
						controls.filter = filterOptions;
						map.addLayer(filterOptions.filterGroup);
	
						var filterControl = new L.Control.Filter(filterOptions);
						map.addControl(filterControl);

						leafletScope.$watch('controls.filter.shape', function(n, o){
							filterControl.setFilter(n);
						});

						// Handler for the filter event (see below)
						var filterHandler = function(e){
							// update the shape if the filter object is set and it has changed
							if(null != controls && null != controls.filter){
								// Finally, check to make sure that the change is actually a change
								if(!filterControl.equals(controls.filter.shape, e.geo)) {
									$timeout(function(){
										controls.filter.shape = e.geo;
									});
								}
							}
						};

						// register for filter events
						map.on('filter:filter', filterHandler);
						leafletScope.$on('$destroy', function(){
							map.off('filter:filter', filterHandler);
						});
					}
				});

			}; // end of return function
		};

		return $delegate;
	}]);
}]);