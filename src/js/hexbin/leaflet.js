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