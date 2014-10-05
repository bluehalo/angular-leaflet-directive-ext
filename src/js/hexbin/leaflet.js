angular.module('leaflet-directive.ext.hexbin', ['leaflet-directive']).config(function($provide){
	"use strict";

	$provide.decorator('leafletDirective', function($delegate){
		// Just adding the scope variable called 'hexbin'
		$delegate[0].scope.hexbin = "=";
		return $delegate;
	});
});