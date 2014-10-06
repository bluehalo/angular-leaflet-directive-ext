# Leaflet Angular Directive Extensions

[![Build Status][travis-image]][travis-url]

## What is it?
This project wraps the popular [Angular Leaflet Directive project](https://github.com/tombatossals/angular-leaflet-directive) project, extending it to include two additional leaflet plugins: [d3 hexbins](https://github.com/Asymmetrik/leaflet-hexbin) and [filter boxes](https://github.com/Asymmetrik/leaflet-filter).

## How do I use it?

### d3 Hexbin
```js
var app = angular.module("demoapp", ["leaflet-directive", "leaflet-directive.ext.hexbin"]);
app.controller("DemoController", [ "$scope", "leafletData", function($scope, leafletData) {
	angular.extend($scope, {
		london: {
			lat: 51.505,
			lng: -0.09,
			zoom: 4
		},
		tiles: {
			url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
		},
		hexbin: {
			data: [],
			config: {}
		}
	});

	var latFn = d3.random.normal(51.505, 0.2);
	var longFn = d3.random.normal(-0.09, 0.2);

	$scope.generateData = function(){
		var data = [];
		for(i=0; i<1000; i++){
			data.push( [longFn(), latFn()] );
		}
		$scope.hexbin.data = data;
	};

}]);
```

### Filter
```js
var app = angular.module("demoapp", ["leaflet-directive", "leaflet-directive.ext.filter"]);
app.controller("DemoController", [ "$scope", "leafletData", function($scope, leafletData) {
	angular.extend($scope, {
		london: {
			lat: 51.505,
			lng: -0.09,
			zoom: 4
		},
		controls: {
			filter: {}
		},
		tiles: {
			url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
		}
	});
	leafletData.getMap().then(function(map) {
		map.on('filter:filter', function (e) {
			console.log(e);
		});
	});
}]);
```

## How do I include this package in my project?
The easiest way to include this package in your project, is to use [Bower](http://bower.io)

```bash
bower install -S angular-leaflet-directive-ext
```

Alternatively, you can download the source or minified javascript files yourself from the GitHub repository (they are contained in the dist directory).

Alter-alternatively, you can clone this repo and build it yourself.

You will also need to install the dependencies (you can find them in the bower.json file).


## How do I build this project?
There are several tools you will need to install to build this project:
* [Node](http://nodejs.org/)
* [Gulp](http://http://gulpjs.com/)
* [Bower](http://bower.io)

If you're on Mac OS, check out [Homebrew](https://github.com/mxcl/homebrew) to get node up and running easily. It's as simple as `brew install node`

First, you will need to install the build dependencies for the project using node. If you want to use the examples, you will need to install the javascript dependencies for the project using bower. Finally, to build the project and generate the artifacts in the /dist directory, you will need to build the project using gulp. 

```bash
npm install
bower install
gulp
```

[travis-url]: https://travis-ci.org/Asymmetrik/angular-leaflet-directive-ext/
[travis-image]: https://travis-ci.org/Asymmetrik/angular-leaflet-directive-ext.svg
