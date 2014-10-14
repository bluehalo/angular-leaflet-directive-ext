angular.module('leaflet-directive.ext.d3.ping', ['leaflet-directive']).config(function($provide){
	"use strict";

	$provide.decorator('leafletDirective', function($delegate){
		// Just adding the scope variable called 'hexbin'
		$delegate[0].scope.ping = "=";
		return $delegate;
	});
});