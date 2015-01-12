angular.module('leaflet-directive.ext.d3.ping', ['leaflet-directive']).config(function($provide){
	'use strict';

	$provide.decorator('leafletDirective', function($delegate){
		// Just adding the scope variable called 'ping'
		$delegate[0].$$isolateBindings.ping = {
			attrName: 'ping',
			mode: '=',
			optional: true
		};

		return $delegate;
	});
});