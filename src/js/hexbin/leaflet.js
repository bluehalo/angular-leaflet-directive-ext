angular.module('leaflet-directive.ext.d3.hexbin', ['leaflet-directive']).config(function($provide){
	'use strict';

	$provide.decorator('leafletDirective', function($delegate){
		// Just adding the scope variable called 'hexbin'
		$delegate[0].$$isolateBindings.hexbin = {
			attrName: 'hexbin',
			mode: '=',
			optional: true
		};

		return $delegate;
	});
});